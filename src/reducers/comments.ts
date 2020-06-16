// RESOURCES
import {
  SET_LOADING_COMMENTS,
  SET_COMMENTS,
  CLEAR_COMMENTS,
  CommentsActionTypes,
} from '../actions/types';
import { Comment } from '../types';

export interface UserState {
  loadingComments: boolean;
  comments: Comment[];
  commentsError: string;
}

const initialState: UserState = {
  loadingComments: false,
  comments: [],
  commentsError: '',
};

const comments = (state = initialState, action: CommentsActionTypes): UserState => {
  switch (action.type) {
    case SET_LOADING_COMMENTS:
      return {
        ...state,
        loadingComments: action.payload,
      };
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
        commentsError: action.payload.error,
      };
    case CLEAR_COMMENTS:
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};

export default comments;
