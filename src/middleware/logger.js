const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('the new action is: ', action)
  console.log('the new state is: ', store.getState())
  console.groupEnd();
  return next(action)
}

export default logger
