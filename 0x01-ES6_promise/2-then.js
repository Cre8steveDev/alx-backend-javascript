export default function handleResponseFromAPI(promise) {
  return promise
    .then((_d) => {
      return { status: 200, body: 'success' };
    })
    .catch((_err) => new Error())
    .finally(() => console.log('Got a response from the API'));
}
