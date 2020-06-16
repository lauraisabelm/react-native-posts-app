import { Comment, CustomPost, User } from '../types';

// POSTS
export const SET_LOADING_POSTS = 'SET_LOADING_POSTS';
export const SET_POSTS = 'SET_POSTS';

interface SetPostsAction {
  type: typeof SET_POSTS;
  payload: {
    error: string;
    posts: CustomPost[];
  };
  error: boolean;
}

interface SetLoadingPostsAction {
  type: typeof SET_LOADING_POSTS;
  payload: boolean;
}

export const DELETE_POSTS = 'DELETE_POSTS';

interface DeletePostsAction {
  type: typeof DELETE_POSTS;
}

export const DELETE_POST_BY_POSITION = 'DELETE_POST_BY_POSITION';

interface DeletePostsByPositionAction {
  type: typeof DELETE_POST_BY_POSITION;
  payload: {
    position: number;
    positionInFavorites: number | undefined;
  };
}

export const MARK_POST_AS_READ = 'MARK_AS_READ';

interface MarkPostAsReadAction {
  type: typeof MARK_POST_AS_READ;
  payload: number;
}

export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';

interface UpdateFavoritesAction {
  type: typeof UPDATE_FAVORITES;
  payload: {
    position: number;
    status: boolean;
  };
}

export const SET_SELECTED_POST = 'SET_SELECTED_POST';

interface SetSelectedPostAction {
  type: typeof SET_SELECTED_POST;
  payload: CustomPost;
}

export type PostsActionTypes =
  | SetPostsAction
  | SetLoadingPostsAction
  | DeletePostsAction
  | MarkPostAsReadAction
  | DeletePostsByPositionAction
  | UpdateFavoritesAction
  | SetSelectedPostAction;

// USER
export const SET_LOADING_USER = 'SET_LOADING_USER';
export const SET_USER = 'SET_USER';

interface SetUserAction {
  type: typeof SET_USER;
  payload: {
    error: string;
    user: User | null;
  };
  error: boolean;
}

interface SetLoadingUserAction {
  type: typeof SET_LOADING_USER;
  payload: boolean;
}

export type UserActionTypes = SetUserAction | SetLoadingUserAction;

// COMMENTS
export const SET_LOADING_COMMENTS = 'SET_LOADING_COMMENTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

interface SetCommentsAction {
  type: typeof SET_COMMENTS;
  payload: {
    error: string;
    comments: Comment[];
  };
  error: boolean;
}

interface SetLoadingCommentsAction {
  type: typeof SET_LOADING_COMMENTS;
  payload: boolean;
}

interface ClearCommentsAction {
  type: typeof CLEAR_COMMENTS;
}

export type CommentsActionTypes =
  | SetCommentsAction
  | SetLoadingCommentsAction
  | ClearCommentsAction;
