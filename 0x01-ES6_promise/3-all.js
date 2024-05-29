/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = Promise.all([uploadPhoto(), createUser()]);

  return promise
    .then((data) => {
      const { body } = data[0];
      const { firstName, lastName } = data[1];

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch((_err) => console.log('Signup system offline'));
}
