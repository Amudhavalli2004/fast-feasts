'use client'
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import AddressForm from './AddressForm'
import { useRouter } from 'next/navigation'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [isLoading, setIsLoading] = useState(false)
  const router=useRouter()

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }

  }, [stripe])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }
    router.push("/cart")

    

    setIsLoading(false)
  }

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] p-4 lg:px-20 xl:px-40 flex flex-col gap-8"
    >
      <PaymentElement
        id="payment-element"
        options={{
          layout: 'tabs',
        }}
      />
      <AddressForm />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="bg-red-500 text-white p-4 rounded-md w-28"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
        </span>
      </button>
    </form>
  )
}

export default CheckoutForm
