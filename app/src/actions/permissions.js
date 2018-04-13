import { getCreator } from './actions';

import {
  URL,
  LOADING,
  SUCCESS,
  FAILURE,
} from '../constants/permissions';

export const get = getCreator(URL, {
  LOADING,
  SUCCESS,
  FAILURE,
});
