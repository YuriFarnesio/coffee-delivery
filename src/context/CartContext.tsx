import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  addItemAction,
  cartReducer,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  Item,
  Order,
  removeItemAction,
} from '../reducers'
import { NewOrderProps } from '../schemas'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (id: Item['id']) => void
  incrementItemQuantity: (id: Item['id']) => void
  decrementItemQuantity: (id: Item['id']) => void
  checkoutCard: (order: NewOrderProps & { totalPrice: string }) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate()

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (!storedStateAsJSON) return cartState
      return JSON.parse(storedStateAsJSON)
    },
  )

  const { cart, orders } = cartState

  const addItem = (item: Item) => {
    dispatch(addItemAction(item))
  }

  const incrementItemQuantity = (id: Item['id']) => {
    dispatch(incrementItemQuantityAction(id))
  }

  const decrementItemQuantity = (id: Item['id']) => {
    dispatch(decrementItemQuantityAction(id))
  }

  const removeItem = (id: Item['id']) => {
    dispatch(removeItemAction(id))
  }

  const checkoutCard = (order: NewOrderProps) => {
    dispatch(checkoutCartAction(order, navigate))
  }

  useEffect(() => {
    if (!cartState) return

    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
        checkoutCard,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
