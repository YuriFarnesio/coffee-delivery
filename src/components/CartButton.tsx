import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@phosphor-icons/react'

import { CartContext } from '../context'

export function CartButton() {
  const { cart } = useContext(CartContext)

  return (
    <Link
      to="/cart"
      className="relative bg-yellow-light hover:brightness-95 rounded-md p-2 transition"
    >
      <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
      <div className="w-5 h-5 flex items-center justify-center absolute top-0 right-0 bg-yellow-dark rounded-full translate-x-1/2 -translate-y-1/2">
        <span className="text-sm font-bold text-white">{cart.length}</span>
      </div>
    </Link>
  )
}
