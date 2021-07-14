const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
   
    try {
        // const {id,email} = req.data.body;
        console.log(req.body.event.data.new)
    // const res= await stripe.customer.create({

    // })
    }
    catch(err){
        console.log("error",err)
    }
  }
}