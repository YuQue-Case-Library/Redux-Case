import React, { Component } from 'react'
import { addTodo } from '../actions'
import store from '../store'
import './index.css'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: '',
    })

    store.dispatch(addTodo(this.state.inputValue))
  }

  render() {
    const { inputValue } = this.state

    return (
      <form onSubmit={this.formSubmit}>
        <input className="input" type="text" value={inputValue} onChange={this.handleInputChange} />
      </form>
    )
  }
}
