
const loading = {
  loading: true,
  loaded: false,
  error: false,
};


const success = {
  loading: false,
  loaded: true,
  error: false,
};

const failure = {
  loading: true,
  loaded: false,
};


const initializeState = {
  loaded: false,
  loading: false,
  error: false,
  data: null,
};


export default ({
  LOADING,
  SUCCESS,
  FAILURE,
}) => (state = initializeState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, loading);

    case SUCCESS:
      return Object.assign({}, state, success, {data: action.data});

    case FAILURE:
      return Object.assign({}, state, failure, {error: action.data});

    default:
      return state;
  }
}