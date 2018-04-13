import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { STORE_KEY } from '../constants/store';
import { URL as LicensesURL } from '../constants/licenses';
import { URL as PermissionsURL } from '../constants/permissions';
import licensesReducers from '../reducers/licenses';
import permissionsReducers from '../reducers/permissions';


const reducers = combineReducers({
  [STORE_KEY + LicensesURL]: licensesReducers,
  [STORE_KEY + PermissionsURL]: permissionsReducers,
});


const store = createStore(
  reducers,
  composeWithDevTools(),
);

export default store;
