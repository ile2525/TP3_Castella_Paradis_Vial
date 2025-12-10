    const particuleContainer = document.getElementById("particule-container");
    const cendreMontante = document.getElementById("cendre-montante");
    
    export function spawnCendre() {

        // import de l'image
        const cendre = document.createElement("img");
        cendre.src = "img/elem-anime/nuee-ardente/particule1.svg";
        cendre.className = "cendre";

        // position aléatoire
        cendre.style.left = Math.random() * window.innerWidth + "px";
        cendre.style.animationDelay = (Math.random() * 2) + "s";

        particuleContainer.appendChild(cendre);

        // suppression après 4 sec
        setTimeout(() => cendre.remove(), 4000);
    }

    // boucle particules + montée
    setInterval(() => {
        spawnCendre();

        if (hauteurCendreMontante < 100) {
            hauteurCendreMontante += 0.2;
            cendreMontante.style.height = heapHeight + "vh";
        }
    }, 150);