import { getPosts } from './endpoints';

export const requestPosts = async () => {
  try {
    const response = await fetch(getPosts());
    const parsedResponse = await response.json();
    if (response.status === 200) {
      return { success: true, payload: parsedResponse };
    }
    return { success: false, payload: [], error: 'An unknown error has ocurred' };
  } catch (err) {
    console.log(`Unable to get the posts information from the database: ${err}`);
    return { success: false, payload: [], error: err };
  }
};
