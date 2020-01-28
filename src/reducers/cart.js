import actionType from '../actions/actionType'

const initState = [{
  id: 1,
  title: '冰糖',
  price: 88,
  amount: 10
}, {
  id: 2,
  title: '雪梨',
  price: 66,
  amount: 5
}]

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.CART_AMOUNT_INCREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount++
        }
        return item
      })
    case actionType.CART_AMOUNT_DECREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount--
        }
        return item
      })
    default:
      return state
  }
}
