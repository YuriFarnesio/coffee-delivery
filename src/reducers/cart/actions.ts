import { NavigateFunction } from 'react-router-dom'

import { Item } from './reducer'
import { NewOrderProps } from '../../schemas'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type ActionTypesProps =
  | {
      type: ActionTypes.ADD_ITEM
      payload: { item: Item }
    }
  | {
      type:
        | ActionTypes.REMOVE_ITEM
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.DECREMENT_ITEM_QUANTITY
      payload: { id: Item['id'] }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: NewOrderProps
        callback: NavigateFunction
      }
    }

export const addItemAction = (item: Item) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { item },
  } satisfies ActionTypesProps
}

export const removeItemAction = (id: Item['id']) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: { id },
  } satisfies ActionTypesProps
}

export const incrementItemQuantityAction = (id: Item['id']) => {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: { id },
  } satisfies ActionTypesProps
}

export const decrementItemQuantityAction = (id: Item['id']) => {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: { id },
  } satisfies ActionTypesProps
}

export function checkoutCartAction(
  order: NewOrderProps,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies ActionTypesProps
}
