function validerFormulaire() {
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (nom === "" || email === "" || message === "") {
    alert("Veuillez remplir tous les champs.");
    return false;
  }

  alert("Merci, " + nom + "! Votre message a été envoyé.");
  return true;
}