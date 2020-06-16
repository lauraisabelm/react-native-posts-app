// LIBS
import Config from 'react-native-config';

export const getPosts = () => `${Config.API_URL}/posts`;
export const getUser = (id: number) => `${Config.API_URL}/users/${id}`;
export const getCommentsByPost = (id: number) => `${Config.API_URL}/posts/${id}/comments`;
