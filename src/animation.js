export function spawnCendre() {
    const particuleContainer = document.getElementById("particule-container");

    const cendre = document.createElement("img");
    cendre.src = "img/elem-anime/nuee-ardente/particule1.svg";
    cendre.className = "cendre";

    cendre.style.left = Math.random() * window.innerWidth + "%";

    particuleContainer.appendChild(cendre);
    return cendre;
}

