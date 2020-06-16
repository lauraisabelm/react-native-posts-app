// LIBS
import { Dispatch } from 'redux';

// RESOURCES
import { SET_LOADING_USER, SET_USER, UserActionTypes } from './types';
import { requestUser } from '../services/users';

export const getUser = (id: number) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING_USER, payload: true });
      const { success, payload, error } = await requestUser(id);
      if (!success) {
        dispatch({ type: SET_USER, payload: { error, user: null }, error: true });
        dispatch({ type: SET_LOADING_USER, payload: false });
        return;
      }
      dispatch({ type: SET_USER, payload: { error: '', user: payload }, error: false });
      dispatch({ type: SET_LOADING_USER, payload: false });
      return;
    } catch (error) {
      dispatch({ type: SET_USER, payload: { error, user: null }, error: true });
      dispatch({ type: SET_LOADING_USER, payload: false });
      console.log(error);
    }
  };
};
