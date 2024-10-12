// 100-await.js
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // Await both promises concurrently
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    // Return the result object
    return {
      photo,
      user,
    };
  } catch (error) {
    // In case of an error, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
