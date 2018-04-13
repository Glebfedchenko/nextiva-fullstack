import { getCreator } from './actions';

import {
  URL,
  LOADING,
  SUCCESS,
  FAILURE,
} from '../constants/licenses';

export const get = getCreator(URL, {
  LOADING,
  SUCCESS,
  FAILURE,
});
