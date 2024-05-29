import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const data = await Promise.all([uploadPhoto(), createUser()]);
    return { photo: data[0], user: data[1] };
  } catch (error) {
    return { photo: null, user: null };
  }
}
