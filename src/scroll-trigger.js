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
            start: "40% 75%",
            end: "bottom 95%",
            scrub: 1,     //-----animation suit le scroll-----
            markers: true,
        }
    })

    gsap.to([".v1", ".v2", ".v3"], {
        opacity: 1,
        stagger: 0.5,   //-----images apparaissent en decalage de 0.3sec-----

        scrollTrigger: {
            trigger: ".volcan",
            start: "bottom bottom",   //-----bas du volcan touche le bas du viewport
            end: "bottom+=50vh bottom",
            scrub: true,
            pin: true,
            pinSpacing: false,
            markers: true
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

