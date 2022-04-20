/* eslint-disable camelcase */
import Stripe from 'stripe'
import { buffer } from 'micro'
import { urqlAdminClient } from 'src/lib/client'
import { InsertHomeDocument } from 'src/generated/graphql'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let event

    try {
      // 1. Retrieve the event by verifying the signature using the raw body and secret
      const rawBody = await buffer(req)
      const signature = req.headers['stripe-signature']

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      )
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    // Successfully constructed event
    console.log('✅ Success:', event)
    console.log(
      'Checking event type:',
      event.type,
      event.type === 'checkout.session.completed'
    )

    // 2. Handle event type (add business logic here)
    if (event.type === 'checkout.session.completed') {
      console.log(
        `💰  Payment received! Metadata here:`,
        event.data.object.metadata
      )

      const { homeData } = event.data.object.metadata

      console.log('homeData: ', homeData)
      urqlAdminClient
        .mutation(InsertHomeDocument, { objects: JSON.parse(homeData) })
        .toPromise()
        .then((result) => {
          console.log('Success after mutation: ', JSON.stringify(result))
        })
        .catch((err) =>
          console.log('Error after mutation. ', JSON.stringify(err))
        )
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
    }

    // 3. Return a response to acknowledge receipt of the event.
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
