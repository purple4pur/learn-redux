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
    default:
      return state
  }
}
