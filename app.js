document.addEventListener("DOMContentLoaded", function() {
    const formulaire = document.querySelector("form");

    if (!formulaire) return;

    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();

        const nom = document.getElementById("nom");
        const email = document.getElementById("email");
        const livre = document.getElementById("livre");

        let formIsValid = true;

        document.querySelectorAll(".error-message").forEach(el => el.remove());
        const oldAlert = document.getElementById("form-alert");
        if (oldAlert) oldAlert.remove();

        const alertBox = document.createElement("div");
        alertBox.id = "form-alert";

        if (!nom.value.trim()) {
            afficherErreur(nom, "Veuillez renseigner votre nom et prénom.");
            formIsValid = false;
        }

        if (!email.value.trim()) {
            afficherErreur(email, "Veuillez renseigner votre adresse email.");
            formIsValid = false;
        }

        if (!livre.value) {
            afficherErreur(livre, "Veuillez sélectionner un livre à réserver.");
            formIsValid = false;
        }

        if (!formIsValid) {
            alertBox.className = "alert alert-danger mb-3";
            alertBox.innerHTML = "<strong>Erreur :</strong> Veuillez remplir les champs obligatoires indiqués en rouge ci-dessous.";
            formulaire.prepend(alertBox);
        } else {
            alertBox.className = "alert alert-success mb-3";
            alertBox.innerHTML = "<strong>Succès !</strong> Votre formulaire a été validé avec succès. Votre réservation est enregistrée.";
            formulaire.prepend(alertBox);

            formulaire.reset();
        }
    });

    function afficherErreur(element, message) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message text-danger small mt-1 fw-bold";
        errorMessage.innerText = message;
        
        element.parentNode.appendChild(errorMessage);
    }
});