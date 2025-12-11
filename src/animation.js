export function spawnCendre() {
    const particuleContainer = document.getElementById("particule-container");

    const cendre = document.createElement("img");
    cendre.src = "img/elem-anime/nuee-ardente/particule1.svg";
    cendre.className = "cendre";

    cendre.style.left = Math.random() * window.innerWidth + "%";

    particuleContainer.appendChild(cendre);
    return cendre;
}

//-------------------essai class ---------------
 
// class Cendre {
//     constructor (posX, posY) {
//         this.posX = 0;
//         this.posY = 0;
//     }
// }