import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(
  // process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  'pk_test_51LESLbAzm3pCJtxOx5uXzRQJquecpFlUKrK7lgptNTCYffBBg2U3fcbNBrnXOjbxtqnpyGV7zmHe4gQ3xWf3zob800HHy68qNh'
)
