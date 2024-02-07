import { useContext } from 'react'

import { Button, InputNumber } from '../components'

import { CartContext } from '../context'
import { Item } from '../reducers'
import { CoffeesType, formatNumberToCurrency } from '../utils'

type CardProps = {
  coffee: CoffeesType & Item
}

export function Card({ coffee }: CardProps) {
  const { removeItem, incrementItemQuantity, decrementItemQuantity } =
    useContext(CartContext)

  const incrementQuantity = () => {
    incrementItemQuantity(coffee.id)
  }

  const decrementQuantity = () => {
    decrementItemQuantity(coffee.id)
  }

  const handleRemoveItem = () => {
    removeItem(coffee.id)
  }

  return (
    <div className="w-full flex justify-between border-b border-solid border-base-button gap-4 pt-2 px-1 pb-8">
      <div className="flex gap-5">
        <img src={coffee.image} alt={coffee.title} className="w-16 h-16" />
        <div className="flex flex-col gap-2">
          <span className="textM text-base-subtitle">{coffee.title}</span>
          <div className="h-8 flex items-center gap-2">
            <InputNumber
              quantity={coffee.quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
            <Button variant="remove" onClick={handleRemoveItem} />
          </div>
        </div>
      </div>
      <div className="text-base-text">
        <span className="textBoldM">
          {formatNumberToCurrency(coffee.price, true)}
        </span>
      </div>
    </div>
  )
}
