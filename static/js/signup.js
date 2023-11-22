document.querySelector('.login-form').addEventListener('submit', event => {
    event.preventDefault();  // Prévient le comportement de soumission par défaut du formulaire
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
  
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }
  
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Traitez la réponse du serveur
        console.log(data);
      })
      .catch(error => {
        // Gérez les erreurs
        console.error(error);
      });
  });
  