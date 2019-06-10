export default store => next => action => {
  console.log(`dispatch: ${action.type}`)
  next(action)
  console.log(`finish: ${action.type}`)
}