import React, { Component } from 'react'

export default class CartList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: []
    }
  }

  componentDidMount() {
    this.setState({
      cart: this.props.cart
    })
  }

  render() {
    console.log(this.state.cart)
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
                    <button>-</button>
                    <span>{item.amount}</span>
                    <button>+</button>
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
