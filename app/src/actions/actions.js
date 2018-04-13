const friendlyError = (error) => {
  return error;
};


export const getCreator = (URL, {
  LOADING,
  SUCCESS,
  FAILURE,
}) => (BASE_URL) => () => (dispatch) => {
  dispatch({
    type: LOADING,
  });

  fetch(BASE_URL + URL)
    .then(data => data.json())
    .then(data => {
      dispatch({
        data,
        type: SUCCESS,
      });
    })
    .catch(error => {
      dispatch({
        type: FAILURE,
        data: friendlyError(error),
      });
    })
};
