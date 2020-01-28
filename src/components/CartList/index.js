import React, { Component } from 'react'

import { increment, decrement } from '../../actions/cart'

export default class CartList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: []
    }
    this.getState = this.getState.bind(this)
  }

  getState() {
    this.setState({
      cart: this.props.getState().cart
    })
  }

  componentDidMount() {
    this.getState()
    this.props.subscribe(this.getState)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.cart.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => {
                      this.props.dispatch(decrement(item.id))
                    }}>-</button>
                    <span>{item.amount}</span>
                    <button onClick={() => {
                      this.props.dispatch(increment(item.id))
                    }}>+</button>
                  </td>
                  <td></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
