import { getHomeTypes } from 'src/store/static'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(
  req: { body: { homeData: any } },
  res: { json: (arg0: { id: any }) => void }
) {
  const { homeData } = req.body

  const plan = getHomeTypes(homeData.plan)

  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        images: [homeData.imgs && homeData.imgs[0]],
        name: plan.displayName,
      },
      unit_amount: plan.price * 100,
    },

    quantity: 1,
  }

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://zillow.iamkarthick.com'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: `${redirectURL}/homes`,
    cancel_url: `${redirectURL}/homes/new`,
    metadata: {
      homeData: JSON.stringify(homeData),
    },
  })

  res.json({ id: session.id })
}

export default CreateStripeSession
