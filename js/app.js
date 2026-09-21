// Récupération des éléments du formulaire
const formulaire = document.getElementById('formulaireContact');
const champNom = document.getElementById('nomComplet');
const champEmail = document.getElementById('emailContact');
const champMessage = document.getElementById('messageContact');

const erreurNom = document.getElementById('erreurNom');
const erreurEmail = document.getElementById('erreurEmail');
const erreurMessage = document.getElementById('erreurMessage');
const confirmationEnvoi = document.getElementById('confirmationEnvoi');

// Expression régulière simple pour valider un format d'email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulaire.addEventListener('submit', function (evenement) {
    evenement.preventDefault(); // empêche le rechargement de la page

    let formulaireValide = true;

    // Réinitialiser les messages d'erreur avant de revalider
    erreurNom.textContent = '';
    erreurEmail.textContent = '';
    erreurMessage.textContent = '';
    confirmationEnvoi.hidden = true;

    // ----- Validation du nom -----
    if (champNom.value.trim() === '') {
        erreurNom.textContent = 'Le nom est requis.';
        formulaireValide = false;
    }

    // ----- Validation de l'email -----
    if (champEmail.value.trim() === '') {
        erreurEmail.textContent = 'L\'adresse email est requise.';
        formulaireValide = false;
    } else if (!regexEmail.test(champEmail.value.trim())) {
        erreurEmail.textContent = 'Le format de l\'email est invalide.';
        formulaireValide = false;
    }

    // ----- Validation du message -----
    if (champMessage.value.trim() === '') {
        erreurMessage.textContent = 'Le message est requis.';
        formulaireValide = false;
    } else if (champMessage.value.trim().length < 10) {
        erreurMessage.textContent = 'Le message doit contenir au moins 10 caractères.';
        formulaireValide = false;
    }

    // ----- Si tout est valide -----
    if (formulaireValide) {
        confirmationEnvoi.hidden = false;
        formulaire.reset();

        // Fait disparaître le message de confirmation après quelques secondes
        setTimeout(function () {
            confirmationEnvoi.hidden = true;
        }, 5000);
    }
});