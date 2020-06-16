// RESOURCES
import { SET_LOADING_USER, SET_USER, UserActionTypes } from '../actions/types';
import { User } from '../types';

export interface UserState {
  loadingUser: boolean;
  user: User | null;
  userError: string;
}

const initialState: UserState = {
  loadingUser: false,
  user: null,
  userError: '',
};

const users = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_LOADING_USER:
      return {
        ...state,
        loadingUser: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        userError: action.payload.error,
      };
    default:
      return state;
  }
};

export default users;
