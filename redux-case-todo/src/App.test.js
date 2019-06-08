import { addTodo, deleteTodo } from './actions'
import store from './store'

// 通过传递 text 做了一次 action 添加 todo
it('run once action with text', () => {
  store.dispatch(addTodo('lane'))

  const state = store.getState()

  // 此时 Store items 只有一个元素
  // 判断第一个元素的 text 是否等于期望值
  expect(state.todo[0].text).toEqual('lane');
  expect(state.todo.length).toEqual(1);

  store.dispatch(deleteTodo())
})

// 通过不传递 text 添加 todo
it('run once action without text', () => {
  store.dispatch(addTodo())

  const state = store.getState()

  // 此时 Store items 只有一个元素
  // 判断第一个元素的 text 是否等于期望值
  expect(state.todo[0].text).toEqual(undefined);
  expect(state.todo.length).toEqual(1);

  store.dispatch(deleteTodo())
})

// 添加 todo 然后移除所有的 todo
it('run once and after remove all', () => {
  store.dispatch(addTodo('lane'))
  store.dispatch(deleteTodo())

  const state = store.getState()

  expect(state.todo.length).toEqual(0);
})

// 通过传递 text 做了多次 action 添加 todo
it('run times action with text', () => {
  store.dispatch(addTodo('lane1'))
  store.dispatch(addTodo('lane2'))

  const state = store.getState()

  expect(state.todo.length).toEqual(2);

  store.dispatch(deleteTodo())
})