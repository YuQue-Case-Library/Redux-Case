const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'REMOVE_TODO':
      if (action.id != null) {
        return state.filter(item => item.id !== action.id)
      }
      return []
    case 'TOGGLE_TODO':
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    default:
      return state
  }
}

export default todos
