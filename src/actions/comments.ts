// LIBS
import { Dispatch } from 'redux';

// RESOURCES
import { SET_LOADING_COMMENTS, SET_COMMENTS, CLEAR_COMMENTS, CommentsActionTypes } from './types';
import { requestCommentsByPost } from '../services/comments';

export const getComments = (id: number) => {
  return async (dispatch: Dispatch<CommentsActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING_COMMENTS, payload: true });
      const { success, payload, error } = await requestCommentsByPost(id);
      if (!success) {
        dispatch({ type: SET_COMMENTS, payload: { error, comments: [] }, error: true });
        dispatch({ type: SET_LOADING_COMMENTS, payload: false });
        return;
      }
      dispatch({ type: SET_COMMENTS, payload: { error: '', comments: payload }, error: false });
      dispatch({ type: SET_LOADING_COMMENTS, payload: false });
      return;
    } catch (error) {
      dispatch({ type: SET_COMMENTS, payload: { error, comments: [] }, error: true });
      dispatch({ type: SET_LOADING_COMMENTS, payload: false });
      console.log(error);
    }
  };
};

export const clearComments = () => {
  return async (dispatch: Dispatch<CommentsActionTypes>) => {
    dispatch({ type: CLEAR_COMMENTS });
  };
};
