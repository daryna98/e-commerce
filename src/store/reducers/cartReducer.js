import { CLOSE_CART_MODAL, OPEN_CART_MODAL } from '../actionTypes'

const initialState = {
  products: {},
  totalQuantity: 0,
  totalPrice: 0,
  isCartOpen: null,
}

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case OPEN_CART_MODAL:
      return {
        ...state,
        isCartOpen: true,
      }

    case CLOSE_CART_MODAL:
      return {
        ...state,
        isCartOpen: false,
      }

    default:
      return state
  }
}
