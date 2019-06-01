import React, { Component } from 'react'
import Form from './Form'
import List from './List'
import store from '../store'
import { setVisibilityFilter } from '../actions'
import './index.css'

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.unsubscribe = null

    const state = store.getState()

    this.state = {
      items: state.todo,
      filterType: state.filter
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState()

      this.setState({
        items: state.todo,
        filterType: state.filter
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  filterItems = (filterType) => {
    store.dispatch(setVisibilityFilter(filterType))
  }

  render() {
    const { items, filterType } = this.state

    return (
      <div className="container">
        <div className="btn-wrapper">
          <a className={["filter-btn", filterType === 'SHOW_ALL' ? "current" : ''].join(' ')} href="javascritp:;" onClick={() => this.filterItems('SHOW_ALL')}>全部</a>
          <a className={["filter-btn", filterType === 'SHOW_COMPLETED' ? "current" : ''].join(' ')} href="javascritp:;" onClick={() => this.filterItems('SHOW_COMPLETED')}>已完成</a>
          <a className={["filter-btn", filterType === 'SHOW_ACTIVE' ? "current" : ''].join(' ')} href="javascritp:;" onClick={() => this.filterItems('SHOW_ACTIVE')}>未完成</a>
        </div>
        <Form />
        <List items={items} filterType={filterType} />
      </div>
    )
  }
}