export function getUser(access_token){
  return fetch('/user',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({access_token: access_token})
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      return response.json();
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
};
