import { useContext, useEffect, useState } from 'react'

import { Button, InputNumber } from '../components'

import { CoffeesType, formatNumberToCurrency } from '../utils'
import { CartContext } from '../context'

type BigCardProps = {
  coffee: CoffeesType
}

export function BigCard({ coffee }: BigCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [itemLoading, setItemLoading] = useState(false)

  const { addItem } = useContext(CartContext)

  const incrementQuantity = () => {
    setQuantity((prevState) => prevState + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prevState) => prevState - 1)
  }

  const handleAddItem = () => {
    addItem({ id: coffee.id, quantity })
    setItemLoading(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (itemLoading) {
      timeout = setTimeout(() => setItemLoading(false), 1500)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [itemLoading])

  return (
    <div
      key={coffee.id}
      className="w-64 flex flex-col items-center bg-base-card rounded-card px-6 pb-5"
    >
      <img src={coffee.image} alt={coffee.title} className="-mt-5 mb-3" />

      <div className="flex items-center justify-center gap-1 mb-4">
        {coffee.tags.map((tag) => (
          <span
            key={tag}
            className="tag text-yellow-dark uppercase bg-yellow-light rounded-full py-1 px-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="titleS text-base-subtitle mb-2">{coffee.title}</h3>
      <span className="textS text-base-label mb-8">{coffee.description}</span>

      <div className="w-full flex items-center justify-between">
        <div className="text-base-text">
          <span className="textS">R$</span>{' '}
          <span className="titleM">{formatNumberToCurrency(coffee.price)}</span>
        </div>

        <div className="h-full flex items-center gap-2">
          <InputNumber
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <Button
            variant="add"
            isLoading={itemLoading}
            onClick={handleAddItem}
          />
        </div>
      </div>
    </div>
  )
}
