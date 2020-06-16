import {
  SET_LOADING_POSTS,
  SET_POSTS,
  DELETE_POSTS,
  DELETE_POST_BY_POSITION,
  MARK_POST_AS_READ,
  UPDATE_FAVORITES,
  SET_SELECTED_POST,
  PostsActionTypes,
} from '../actions/types';
import { CustomPost } from '../types';

export interface PostsState {
  favorites: CustomPost[];
  loadingPosts: boolean;
  posts: CustomPost[];
  postsError: string;
  selectedPost: CustomPost;
}

const initialState: PostsState = {
  favorites: [],
  loadingPosts: false,
  posts: [],
  postsError: '',
  selectedPost: {
    body: '',
    favorite: false,
    id: 0,
    read: true,
    title: '',
    userId: 0,
  },
};

const posts = (state = initialState, action: PostsActionTypes): PostsState => {
  switch (action.type) {
    case SET_LOADING_POSTS:
      return {
        ...state,
        loadingPosts: action.payload,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        postsError: action.payload.error,
      };
    case SET_SELECTED_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };
    case DELETE_POSTS:
      return {
        ...state,
        posts: [],
      };
    case DELETE_POST_BY_POSITION:
      return {
        ...state,
        favorites:
          action.payload.positionInFavorites !== undefined
            ? [
                ...state.favorites.slice(0, action.payload.positionInFavorites),
                ...state.favorites.slice(action.payload.positionInFavorites + 1),
              ]
            : [...state.favorites],
        posts: [
          ...state.posts.slice(0, action.payload.position),
          ...state.posts.slice(action.payload.position + 1),
        ],
      };
    case MARK_POST_AS_READ:
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, action.payload),
          Object.assign({}, state.posts[action.payload], {
            read: true,
          }),
          ...state.posts.slice(action.payload + 1),
        ],
      };
    case UPDATE_FAVORITES:
      let positionInFavorites = 0;
      if (!action.payload.status) {
        positionInFavorites = state.favorites.findIndex(
          (item) => item.id === state.posts[action.payload.position].id,
        );
      }
      return {
        ...state,
        favorites: action.payload.status
          ? [
              ...state.favorites,
              Object.assign({}, state.posts[action.payload.position], {
                favorite: action.payload.status,
              }),
            ]
          : [
              ...state.favorites.slice(0, positionInFavorites),
              ...state.favorites.slice(positionInFavorites + 1),
            ],
        posts: [
          ...state.posts.slice(0, action.payload.position),
          Object.assign({}, state.posts[action.payload.position], {
            favorite: action.payload.status,
          }),
          ...state.posts.slice(action.payload.position + 1),
        ],
        selectedPost: { ...state.selectedPost, favorite: action.payload.status },
      };
    default:
      return state;
  }
};

export default posts;
