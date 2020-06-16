import { Dispatch } from 'redux';
import {
  SET_LOADING_POSTS,
  SET_POSTS,
  DELETE_POSTS,
  DELETE_POST_BY_POSITION,
  MARK_POST_AS_READ,
  UPDATE_FAVORITES,
  SET_SELECTED_POST,
  PostsActionTypes,
} from './types';
import { requestPosts } from '../services/posts';
import { CustomPost, Post } from '../types';

export const getPosts = () => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING_POSTS, payload: true });
      const { success, payload, error } = await requestPosts();
      if (!success) {
        dispatch({ type: SET_POSTS, payload: { error, posts: [] }, error: true });
        dispatch({ type: SET_LOADING_POSTS, payload: false });
        return;
      }
      const posts: CustomPost[] = payload.map((post: Post, index: number) => {
        return {
          body: post.body,
          favorite: false,
          id: post.id,
          read: index > 19,
          title: post.title,
          userId: post.userId,
        };
      });
      dispatch({ type: SET_POSTS, payload: { error: '', posts }, error: false });
      dispatch({ type: SET_LOADING_POSTS, payload: false });
      return;
    } catch (error) {
      dispatch({ type: SET_POSTS, payload: { error, posts: [] }, error: true });
      dispatch({ type: SET_LOADING_POSTS, payload: false });
      console.log(error);
    }
  };
};

export const setSelectedPost = (post: CustomPost) => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: SET_SELECTED_POST, payload: post });
  };
};

export const deletePostByPosition = (position: number, positionInFavorites: number) => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: DELETE_POST_BY_POSITION, payload: { position, positionInFavorites } });
  };
};

export const deleteAll = () => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: DELETE_POSTS });
  };
};

export const markAsRead = (position: number) => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: MARK_POST_AS_READ, payload: position });
  };
};

export const updateFavorites = (position: number, status: boolean) => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: UPDATE_FAVORITES, payload: { position, status } });
  };
};
