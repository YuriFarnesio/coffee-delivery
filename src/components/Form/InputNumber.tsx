import { Minus, Plus } from '@phosphor-icons/react'

type InputNumberProps = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function InputNumber({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: InputNumberProps) {
  return (
    <div className="h-full flex items-center bg-base-button rounded-md gap-1 py-1 px-2">
      <button onClick={decrementQuantity}>
        <Minus
          size={14}
          className="text-purple-default hover:text-purple-dark transition"
        />
      </button>
      <span className="min-w-5 textM text-base-title text-center">
        {quantity}
      </span>
      <button onClick={incrementQuantity}>
        <Plus
          size={14}
          className="text-purple-default hover:text-purple-dark transition"
        />
      </button>
    </div>
  )
}
