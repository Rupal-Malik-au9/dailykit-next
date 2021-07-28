import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useMutation,useQuery,gql } from "@apollo/client";
import { useAuth } from "../../../store/auth";
import { UPDATE_ORGANIZATION, UPDATE_ORGANIZATION_ADMINS_BY_STRIPE_PAYMENT_METHOD_ID } from "../../../graphql";
import { loadStripe } from '@stripe/stripe-js'
import {
   Elements,
   useStripe,
   useElements,
   CardElement,
} from '@stripe/react-stripe-js'
import styled from 'styled-components';
import { Footer as Foter, H2, H4, Main, GhostButton, Button } from "../../../components/styled";
import Footer from "../../../components/Footer";


export const PaymentForm = () => {
   const { user } = useAuth();
   const [intent, setIntent] = React.useState(null)
   
   // stripeCustomerId and organization for intent
   const {data}=useQuery(ORGANIZATION_ADMINS,  {
      variables:{
          where: {
         email:{"_eq": user.email}
       }
       },
       onCompleted: () => {
          console.log("success")
        },
        onError: (error) => {
          console.log(error);
        },
    })
    const stripeCustomerId=data?.organizationAdmins[0].stripeCustomerId
    const organization=data?.organizationAdmins[0].organization


   // intent created
   React.useEffect(() => {
      if (stripeCustomerId) {
         ; (async () => {
            const intent = await createSetupIntent(
               stripeCustomerId,
               organization
            )
            setIntent(intent)
         })()
      }
   }, [user, organization])

   const createSetupIntent = async (customer, organization = {}) => {
      try {
         let stripeAccountId = null
         if (
            organization?.stripeAccountType === 'standard' &&
            organization?.stripeAccountId
         ) {
            stripeAccountId = organization?.stripeAccountId
         }
         const URL = `${process.browser}/api/setup-intent`
         const { data } = await axios.post(URL, { customer, stripeAccountId })
         return data.data
      } catch (error) {
         return error
      }
   }

   const [createPaymentMethod] = useMutation(UPDATE_ORGANIZATION_ADMINS_BY_STRIPE_PAYMENT_METHOD_ID, {
      onCompleted: () => {
         alert("Payment method created")
      },
      onError: error => {
         console.error(error)
      },
   })

   const handleResult = async ({ setupIntent }) => {
      try {
         if (setupIntent.status === 'succeeded') {
            const ORIGIN = isClient ? `${process.browser}` : ''
            let URL = `${ORIGIN}/api/payment-method/${setupIntent.payment_method}`
            if (
               organization.stripeAccountType === 'standard' &&
               organization.stripeAccountId
            ) {
               URL += `?accountId=${organization.stripeAccountId}`
            }
            const { data: { success, data = {} } = {} } = await axios.get(URL)

            if (success) {
               await createPaymentMethod({
                  variables: {
                     where: {
                        email: { "_eq": user.organization.email }
                     },
                     _set: {
                        stripePaymentMethodId: paymentMethod.id
                     },
                  }
               })

            } else {
               throw Error("Couldn't complete card setup, please try again")
            }
         } else {
            throw Error("Couldn't complete card setup, please try again")
         }
      } catch (error) { }
   }

   const stripePromise = loadStripe(
      process.browser && `${window._env_.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
   );

   if (!intent) return "loading"
   return (
      <div>
         <Elements stripe={stripePromise}>
            <CardSetupForm intent={intent} handleResult={handleResult} />
         </Elements>
      </div>
   )
}

export default PaymentForm;

const CardSetupForm = ({ intent, handleResult }) => {
   const stripe = useStripe()
   const router = useRouter();
   const { user } = useAuth();
   const elements = useElements()
   const inputRef = React.useRef(null)
   const [name, setName] = React.useState('')
   const [error, setError] = React.useState('')
   const [submitting, setSubmitting] = React.useState(false)

   const [update] = useMutation(UPDATE_ORGANIZATION, {
      onCompleted: () => {
         router.push("/onboard/signup/support");
      },
      onError: (error) => {
         console.log(error);
      },
   });


   React.useEffect(() => {
      inputRef.current.focus()
   }, [])

   const handleSubmit = async event => {
      setSubmitting(true)
      event.preventDefault()

      if (!stripe || !elements) {
         return
      }

      const result = await stripe.confirmCardSetup(intent.client_secret, {
         payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
               name,
            },
         },
      })

      if (result.error) {
         setSubmitting(false)
         setError(result.error.message)
      } else {
         handleResult(result)
      }
   }
   
   const nextPage = () => {
      update({
         variables: {
            id: user.organization.id,
            _set: {
               onboardStatus: "SUPPORT",
            },
         },
      });
   };
   return (
      <>
      <Layout>
         <Main>
         <form onSubmit={handleSubmit} className="container">
            <div className="row justify-content-center">
               <h4 className="text-2xl nunito text-center" style={{ "margin": "34px 0 30px 0px", fontWeight: "bold" }}>Enter your Payment Details</h4>
               <div className="col-md-5 col-sm-12 wrapper">
                  <section className="mb-3 mt-4">
                     <label htmlFor="name" className="label">
                        Card Holder's Name
                     </label>
                     <input
                        type="text"
                        name="name"
                        value={name}
                        ref={inputRef}
                        placeholder="Enter Card Holder's name"
                        onChange={e => setName(e.target.value.trim())}
                        className="input mt-2"
                     />
                  </section>
                  <section className="mt-4 mb-4">
                     <label htmlFor="name" className="label mt-4">
                        Card Details
                     </label>
                     <CardSection />
                  </section>
               </div>
            </div>
            <Submit
               disabled={!name || submitting}
               type="submit"
               className="mt-2 mb-2"
               style={{ "marginLeft": "28.7%" }}
               onClick={nextPage}
            >
               {submitting ? 'Saving...' : 'Save'}
            </Submit>
            {error && <span tw="block text-red-500 mt-2">{error}</span>}
         </form>
      </Main>
         <Foter style={{ marginTop: "-80px", marginLeft: "20px", justifyContent: "start" }}>
         </Foter>
      </Layout>
         <Footer />
      </>
   );
}

// card info passed into stripe card Element

const CardSection = () => {
   return (
      <CardSectionWrapper className="mt-2">
         <CardElement
            options={CARD_ELEMENT_OPTIONS}
         />
      </CardSectionWrapper>
   )
}


// for cardElement styling
const CARD_ELEMENT_OPTIONS = {
   style: {
      base: {
         color: '#fff',
         fontSize: '16px',
         '::placeholder': {
            color: '#aab7c4',
         },
      },
      invalid: {
         color: '#fa755a',
         iconColor: '#fa755a',
      },
   },
}


// query for stripeCustomerId and organization for intent
const ORGANIZATION_ADMINS = gql`
query organizations($where: organization_organizationAdmin_bool_exp = {}) {
   organizationAdmins(where: $where) {
     stripeCustomerId
     organization {
       id
       adminSecret
     }
   }
 }`


// styled-components
const Submit = styled.button`
width: 42.5%;
font-family: "Nunito", sans-serif;
border-radius: 0.25rem;
height: 2.5rem;
--tw-bg-opacity: 1;
background-color:#8ac03b;
--tw-text-opacity: 1;
border:none;
color: rgba(255, 255, 255, var(--tw-text-opacity));
text-transform: uppercase;
letter-spacing: 0.05em;

&:disabled {
  --tw-bg-opacity: 1;
  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));
  cursor: not-allowed;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}

`;
const CardSectionWrapper = styled.div`
   .StripeElement {
      height: 40px;
      width: 100%;
      color: #fff;
      padding: 10px 0;
      background-color: #1a202c;
      border-bottom: 1px solid #2d3748;
   }

   .StripeElement--invalid {
      border-color: #fa755a;
   }

   .StripeElement--webkit-autofill {
      background-color: #fefde5 !important;
   }
`