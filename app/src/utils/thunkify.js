export default (dispatch, action) => {
  return (...args) => {
    return action(...args)(dispatch);
  }
}