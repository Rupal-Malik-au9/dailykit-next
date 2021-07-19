import { GraphQLClient } from 'graphql-request';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const client = new GraphQLClient(process.env.HASURA_KEYCLOAK_URL, {
   headers: {
      'x-hasura-admin-secret': process.env.KEYCLOAK_ADMIN_SECRET
   }
})

export default async function createPaymentId(req, res) {
  if (req.method === 'POST') {
    try {
        // const {email} = req.body.event.data.new
        const{number,exp_month,exp_year,cvc,email}=req.body
        console.log(number,exp_month,exp_year,cvc,email)
        const paymentMethod = await stripe.paymentMethods.create({
          type: 'card',
          card: {
            number: number,
            exp_month: exp_month,
            exp_year: exp_year,
            cvc: cvc,
          },
        });
      const { updateOrganizationAdmins } = client.request(
        UPDATE_ORGANIZATION_ADMINS_BY_STRIPE_PAYMENT_METHOD_ID,
        {
          where: {
            email:{"_eq": email}
          },
          _set: {
            stripePaymentMethodId: paymentMethod.id
          },
        }
      )
        return res.status(200).redirect(`${req.headers.origin}/onboard/signup/support?carddetails=true`)
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
  }
}

export const UPDATE_ORGANIZATION_ADMINS_BY_STRIPE_PAYMENT_METHOD_ID= `
mutation updateOrganizationAdmins($_set: organization_organizationAdmin_set_input={}, $where: organization_organizationAdmin_bool_exp!) {
  updateOrganizationAdmins(where: $where, _set: $_set) {
    returning {
      id
      stripePaymentMethodId
    }
  }
}
`


