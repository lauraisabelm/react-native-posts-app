// RESOURCES
import { getCommentsByPost } from './endpoints';

export const requestCommentsByPost = async (id: number) => {
  try {
    const response = await fetch(getCommentsByPost(id));
    const parsedResponse = await response.json();
    if (response.status === 200) {
      return { success: true, payload: parsedResponse };
    }
    return { success: false, payload: [], error: 'An unknown error has ocurred' };
  } catch (err) {
    console.log(`Unable to get the comments information from the database: ${err}`);
    return { success: false, payload: [], error: err };
  }
};
