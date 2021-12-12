import {
  CLOSE_CART_MODAL,
  FETCH_PRODUCTS,
  OPEN_CART_MODAL,
} from './actionTypes'

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fetch(
      'https://e-commerce-21eba-default-rtdb.europe-west1.firebasedatabase.app/products.json'
    )
    const responseData = await response.json()

    const products = [] // for data transformation

    for (const key in responseData) {
      // firebase specific ids (p1, p2..) and objects instead of an array
      products.push({
        id: key, // p1, p2...
        title: responseData[key].title,
        description: responseData[key].description,
        price: responseData[key].price,
        image: responseData[key].image,
      })
    }

    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,
    })
  }
}

export const openCartModal = () => {
  return {
    type: OPEN_CART_MODAL,
  }
}

export const closeCartModal = () => {
  return {
    type: CLOSE_CART_MODAL,
  }
}
