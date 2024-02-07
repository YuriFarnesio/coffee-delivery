import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import { CartContext } from '../context'
import { paymentMethods } from '../utils'

export function Success() {
  const { orderId } = useParams()

  const { orders } = useContext(CartContext)

  const orderInfo = orders.find((order) => order.id === Number(orderId))

  if (!orderInfo?.id) {
    return (
      <main>
        <section className="w-screen max-w-6xl h-full flex flex-col items-center gap-20 py-20 px-4 mx-auto">
          <div className="flex flex-col items-center gap-1">
            <h2 className="titleL text-yellow-dark">Pedido não encontrado!</h2>
            <span className="textL text-base-subtitle">
              Volte ao menu e peça seu delicioso café.
            </span>
          </div>

          <img
            src="/images/delivery.svg"
            alt="Entregador da Coffee Delivery levando seu café"
            className="w-full max-w-[30.75rem] h-full object-cover"
          />
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="w-screen max-w-6xl flex items-center justify-between gap-28 py-20 px-4 mx-auto">
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h2 className="titleL text-yellow-dark">Uhu! Pedido confirmado</h2>
            <span className="textL text-base-subtitle">
              Agora é só aguardar que logo o café chegará até você
            </span>
          </div>

          <div className="bg-gradient bg-origin-border border border-transparent rounded-card">
            <div className="flex flex-col justify-center bg-background rounded-card gap-8 p-10">
              <div className="flex items-center gap-3">
                <MapPin
                  size={32}
                  weight="fill"
                  className="min-w-8 min-h-8 text-background bg-purple-default rounded-full p-2"
                />
                <span className="textM text-base-text">
                  Entrega em{' '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                    {orderInfo.complement ? `, ${orderInfo.complement}` : ''}
                  </strong>
                  <br />
                  {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}{' '}
                  - {orderInfo.cep}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Timer
                  size={32}
                  weight="fill"
                  className="min-w-8 min-h-8 text-background bg-yellow-default rounded-full p-2"
                />
                <span className="textM text-base-text">
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CurrencyDollar
                  size={32}
                  className="min-w-8 min-h-8 text-background bg-yellow-dark rounded-full p-2"
                />
                <span className="textM text-base-text">
                  Pagamento na entrega
                  <br />
                  <strong>{paymentMethods[orderInfo.paymentMethod]}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/delivery.svg"
          alt="Entregador da Coffee Delivery levando seu café"
          className="w-full max-w-[30.75rem] h-full object-cover"
        />
      </section>
    </main>
  )
}
