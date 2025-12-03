import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

// TUTO
// Voici un exemple de fonctionnement :

gsap.to('.part3-nuee', { // Ne pas oublier d'indiquer ta classe css

    // Propriétés d'animation
    opacity: 1, // Finit en opacité 1
    y: 1000, // Permet l'animation vers le bas
   
    // Conditions de déclanchements
    scrollTrigger: {
    trigger: ".part3", //Le contenu de la classe devient la "zone de surveillance"
    start: "top+=500", // L'animation commence à 500px du haut de ".part3"
    end: "bottom", // Et s'arrete en bas de la classe
    scrub: 2 // relie l'animation au scroll, ici 2 permet un effet "tu descends, je te rattrape"
    }
})

import './style.css'
