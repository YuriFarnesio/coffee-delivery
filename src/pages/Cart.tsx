import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressForm, Button, Card, PaymentForm } from '../components'

import { CartContext } from '../context'
import { NewOrderProps, newOrder } from '../schemas'
import { coffees, formatNumberToCurrency } from '../utils'

const shippingPrice = 3.5

export function Cart() {
  const { cart, checkoutCard } = useContext(CartContext)

  const form = useForm<NewOrderProps>({
    resolver: zodResolver(newOrder),
  })

  const coffeesInCart = cart.map((item) => {
    const infos = coffees.find((coffee) => coffee.id === item.id)

    if (!infos) throw new Error('Invalid coffee!')

    return {
      ...item,
      ...infos,
    }
  })

  const totalPrice = coffeesInCart.reduce((acc, coffee) => {
    return (acc += coffee.price * coffee.quantity)
  }, 0)

  const handleOrderCheckout: SubmitHandler<NewOrderProps> = (data) => {
    if (cart.length === 0) {
      return toast.error('É preciso ter pelo menos um item no carrinho')
    }

    checkoutCard({
      ...data,
      totalPrice: (totalPrice + shippingPrice).toFixed(2),
    })

    toast.success('Pedido confirmado com sucesso.')
  }

  return (
    <main className="max-w-6xl flex items-start justify-between gap-8 pt-10 px-4 pb-32 mx-auto">
      <section className="w-full flex flex-col gap-4">
        <h2 className="titleXS text-base-subtitle">Complete seu pedido</h2>

        <form
          id="newOrder"
          onSubmit={form.handleSubmit(handleOrderCheckout)}
          className="flex flex-col gap-3"
        >
          <AddressForm form={form} />
          <PaymentForm form={form} />
        </form>
      </section>

      <section className="w-full max-w-md flex flex-col gap-4">
        <h2 className="titleXS text-base-subtitle">Cafés selecionados</h2>

        <div className="flex flex-col items-center bg-base-card rounded-card-big gap-6 p-10">
          {coffeesInCart.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}

          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between">
              <span className="textS text-base-text">Total de itens</span>
              <span className="textS text-base-text">
                {formatNumberToCurrency(totalPrice, true)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="textS text-base-text">Entrega</span>
              <span className="textS text-base-text">
                {formatNumberToCurrency(shippingPrice, true)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="textBoldL text-base-subtitle">Total</span>
              <span className="textBoldL text-base-subtitle">
                {formatNumberToCurrency(totalPrice + shippingPrice, true)}
              </span>
            </div>
          </div>

          <Button variant="primary" form="newOrder">
            Confirmar pedido
          </Button>
        </div>
      </section>
    </main>
  )
}
