import { spawnCendre } from "./animation.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function scrollAnimation() {

    // -------------------- Section 1 - Sandra --------------------
    gsap.to('.volcan', {

        // Propriétés d'animation
        scale: 1.8,


        // Conditions de déclenchements
        scrollTrigger: {
            trigger: ".volcan",
            start: "top 40%",
            end: "bottom 45%",
            scrub: 1,     //-----animation suit le scroll-----
            markers: true,
        }
    })

    gsap.to(".v1", {
        opacity: 1,

        scrollTrigger: {
            trigger: ".volcan",
            start: "center bottom",   //-----bas du volcan touche le bas du viewport
            end: "85% 80%",
            scrub: true,
            pin: true,
            pinSpacing: false,
            //markers: true
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

    const cendreMontante = document.getElementById("cendre-montante");
    
ScrollTrigger.create({
    trigger: ".partie4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true,

    onUpdate: (self) => {
        // 1) Génère une particule
        const particule = spawnCendre();

        // 2) Anime la particule
        gsap.fromTo(particule, 
            { opacity: 0 },
            { y: 1920, opacity: 1, duration: 10, ease: "none" }
        );

        // 3) Montée du tas de cendres
        const progress = self.progress;
        cendreMontante.style.height = (progress * 100) + "%";
    }
});


}

