import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const promise = Promise.all([uploadPhoto(), createUser()]);

  return promise
    .then((data) => {
      const body = data[0].body;
      const firstName = data[1].firstName;
      const lastName = data[1].lastName;

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch((_err) => console.log('Signup system offline'));
}
