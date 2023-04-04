import Stripe from 'stripe'
import { buffer } from 'micro'
import { createAuthenticatedClient } from 'src/config/apollo'
import { UpdatePropertyDocument } from 'src/generated/graphql'
import { NextApiRequest, NextApiResponse } from 'next'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    let event

    try {
      // 1. Retrieve the event by verifying the signature using the raw body and secret
      const rawBody = await buffer(req)
      const signature = req.headers['stripe-signature']?.toString() || ''

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET || ''
      )
    } catch (err: any) {
      //   console.log(`❌ Error message: ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    // Successfully constructed event
    // console.log('✅ Success:', event)
    // console.log(
    //   'Checking event type:',
    //   event.type,
    //   event.type === 'checkout.session.completed'
    // )

    // 2. Handle event type (add business logic here)
    if (event.type === 'checkout.session.completed') {
      const { id, plan } = (event.data.object as any).metadata

      const adminClient = await createAuthenticatedClient()

      adminClient
        .mutate({ mutation: UpdatePropertyDocument, variables: { id, plan } })
        .then((result) => {
          //   console.log('Success after mutation: ', JSON.stringify(result))
        })
        .catch((err) => {
          console.log('Error after mutation. ', err)
        })
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
    }

    // 3. Return a response to acknowledge receipt of the event.
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
