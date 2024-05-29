import utils from './utils';
export default function handleProfileSignup() {
  const promise = Promise.all([utils.uploadPhoto(), utils.createUser()]);

  promise
    .then((data) => {
      const body = data[0].body;
      const firstName = data[1].firstName;
      const lastName = data[1].lastName;

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch((_err) => console.log('Signup system offline'));
}
