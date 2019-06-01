import React from 'react'
import Item from './Item'
import { deleteTodo, toggleTodo } from '../actions'
import store from '../store'
import './index.css'

export default ({ items, filterType }) => {
  const onRemove = (id) => {
    store.dispatch(deleteTodo(id))
  }

  const onChangeStatus = (id) => {
    store.dispatch(toggleTodo(id))
  } 

  let newItems = []
console.log(items, filterType)
  switch (filterType) {
    case 'SHOW_COMPLETED':
      newItems = items.filter(t => t.completed)
      break
    case 'SHOW_ACTIVE':
      newItems =  items.filter(t => !t.completed)
      break
    case 'SHOW_ALL':
    default:
      newItems = items
      break
  }

  return (
    <div className="list">
      {
        newItems.map((item, index) => (
          <Item key={index} item={item} onRemove={onRemove} onChangeStatus={onChangeStatus} />
        ))
      }
    </div>
  );
}