export function spawnCendre() {
    const particuleContainer = document.getElementById("particule-container");

    // Création de la cendre ici pour facilité la duplication de l'animation
    const cendre = document.createElement("img");
    cendre.src = "img/elem-anime/nuee-ardente/particule1.svg";
    cendre.className = "cendre";

    // Positionnement aléatoire horizontal
    cendre.style.left = Math.random() * 100 + "%";

    // Ajout de la cendre au conteneur
    particuleContainer.appendChild(cendre);

    return cendre;
}

