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
            start: "top", // top=haut du trigger, +=400 décale e 400px vers le bas, bottom: par rapport au bas du viewport. animation: démarre lorsque le haut du volcan(+400px) touch le bas du viewport
            end: "bottom top",
            scrub: true,
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
}

