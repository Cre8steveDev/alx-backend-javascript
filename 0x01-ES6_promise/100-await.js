import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const data = await Promise.all([uploadPhoto(), createUser()]);
    return data;
  } catch (error) {
    return { photo: null, user: null };
  }
}
