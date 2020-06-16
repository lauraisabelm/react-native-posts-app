// RESOURCES
import { getUser } from './endpoints';

export const requestUser = async (id: number) => {
  try {
    const response = await fetch(getUser(id));
    const parsedResponse = await response.json();
    if (response.status === 200) {
      return { success: true, payload: parsedResponse };
    }
    return { success: false, payload: null, error: 'An unknown error has ocurred' };
  } catch (err) {
    console.log(`Unable to get the user information from the database: ${err}`);
    return { success: false, payload: null, error: err };
  }
};
