import { produce } from 'immer'

import { ActionTypes, ActionTypesProps } from './actions'
import { NewOrderProps } from '../../schemas'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends NewOrderProps {
  id: number
  items: Item[]
}

export interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (!itemAlreadyAdded) draft.cart.push(action.payload.item)
        else itemAlreadyAdded.quantity += action.payload.item.quantity
      })
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemId = draft.cart.findIndex(
          (item) => item.id === action.payload.id,
        )

        draft.cart.splice(itemId, 1)
      })
    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.id,
        )

        if (itemAlreadyAdded) itemAlreadyAdded.quantity += 1
      })
    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.id,
        )

        if (itemAlreadyAdded && itemAlreadyAdded.quantity > 1)
          itemAlreadyAdded.quantity -= 1
      })
    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }

        draft.cart = []
        draft.orders.push(newOrder)

        action.payload.callback(`/order/${newOrder.id}/success`)
      })
    default:
      return state
  }
}
