    const particuleContainer = document.getElementById("particule-container");
    const cendreMontante = document.getElementById("cendre-montante");
    
    let hauteurCendreMontante = 0;

    export function spawnCendre() {

        // import de l'image
        const cendre = document.createElement("img");
        cendre.src = "img/elem-anime/nuee-ardente/particule1.svg";
        cendre.className = "cendre";

        // position aléatoire
        cendre.style.left = Math.random() * window.innerWidth + "px";
        cendre.style.animationDelay = (Math.random() * 2) + "s";

        particuleContainer.appendChild(cendre);

        return cendre;
    }

    // boucle particules + montée
    setInterval(() => {
        spawnCendre();

        if (hauteurCendreMontante < 100) {
            hauteurCendreMontante += 0.2;
            cendreMontante.style.height = hauteurCendreMontante + "vh";
        }
    }, 150);