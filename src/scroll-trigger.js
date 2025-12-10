import { spawnCendre } from "./animation.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function scrollAnimation() {

    // -------------------- Section 1 - Sandra --------------------
    gsap.to('.volcan', {

        // Propriétés d'animation
        scale: 1,


        // Conditions de déclenchements
        scrollTrigger: {
            trigger: ".volcan",
            start: "center center",
            end: "bottom bottom",
            scrub: 1,     //-----animation suit le scroll-----
            pin: true,     //-----arrête le scroll visuellement sur la section
            markers: true,
        }
    })

    // -------------------- Section 3 - Ilé --------------------
    // Besoin de la section 2 pour pouvoir finir
    gsap.to('.part3-nuee', {

        // Propriétés d'animation
        opacity: 1,
        y: 500,

        // Conditions de déclenchements
        scrollTrigger: {
            trigger: ".part3",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            markers: true
        }

    })

    // -------------------- Section 4 - Ilé --------------------

    const particuleContainer = document.getElementById("particule-container");
    const cendreMontante = document.getElementById("cendre-montante");
    
    ScrollTrigger.create({
        trigger: ".partie4",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,

        onUpdate: (self) => {
            // Génération de cendre au scroll
            const particule = spawnCendre(particuleContainer);

            gsap.from(particule, {
                y: -200,
                opacity: 0,
                duration: 2,
                ease: "none"
            });

            // montée du tas de cendres
            const monte = self.progress; // 0 -> 1
           cendreMontante.style.height = (monte * 100) + "vh";
        }
    });


}

