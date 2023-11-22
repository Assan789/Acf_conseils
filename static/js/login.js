const formData = new FormData();
const username = 'admin';
const password = 'admin';
fetch('http://127.0.0.1:5000/login', {
  method: 'POST',
  body: JSON.stringify({ username, password }),
  headers: {
    'Content-Type': 'application/json'
}})
  .then(response => response.json())
  .then(data => {
    // Traitez la réponse du serveur
    console.log(data);
  })
  .catch(error => {
    // Gérez les erreurs
    console.error(error);
  });
