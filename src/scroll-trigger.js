import { spawnCendre } from "./animation.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function scrollAnimation() {

    // -------------------- Section 1 - Sandra --------------------------------------------------------------

    //-----scale volcan-------------------------------
    gsap.to('.volcan', {

        // Propriétés d'animation
        scale: 1.2,

        // Conditions de déclenchements
        scrollTrigger: {
            trigger: ".n2",
            start: "top 10%",
            end: "+=625% 20%",
            scrub: true,
            //markers: true
        }
    })
    //-----apparition plan 3----------------------------------------------------------
    gsap.to(".v1", {
        opacity: 1,

        scrollTrigger: {
            trigger: ".boxBottom",
            start: "top bottom",
            end: "bottom center",
            scrub: true,
            //markers: true
        }
    })

    //-----apparition plan 2 et narration 2----------------------------------------
    gsap.to([".v2", ".nar2"], {
        opacity: 1,

        scrollTrigger: {
            trigger: ".boxBottom",
            start: "20% 80%",
            end: "90% bottom",
            scrub: true,
            //markers: true
        }
    })
    //-----apparition premier plan ------------------
    gsap.to(".v3", {
        opacity: 1,
        scale: 1,

        scrollTrigger: {
            trigger: ".boxBottom",
            start: "top 60%",
            end: "bottom center",
            scrub: true,
            //markers: true
        }
    })

    //-----apparition cracks timeline --------------------

    const timeline1A = gsap.timeline({

        //-----trigger-----
    scrollTrigger: {
        trigger: ".balcon",
        start: "center bottom",
        end: "bottom center",
        scrub: 1,
        //markers: true
    }
});
//-----apparition cracks -----
timeline1A.fromTo(".cracks", 
    { opacity: 0 },
    { opacity: 1, duration: 1 }
);

//-----apparition ville  timeline----------------------
    const timeline1B = gsap.timeline({

        //-----trigger-----
    scrollTrigger: {
        trigger: ".boxTransition2",
        start: "20% top",
        end: "bottom center",
        scrub: 1,
        //markers: true
    }
});
//-----apparition ville -----
timeline1B.fromTo(".ville2", 
    { opacity: 0 },
    { opacity: 1, duration: 1 }
);

//-----apparition panache ------------------------------2e section----Sandra----------------
const timeline1C = gsap.timeline({
    scrollTrigger: {
        trigger: ".ville2",
        start: "20% top",
        end: "95% bottom",
        scrub: 1,
        //markers: true
    }
});
// ------Apparition du panache ------
timeline1C.fromTo(".panache2",
    { opacity: 0 },
    { opacity: 1, duration: 1 }
);

//-----mouvement vers le haut------------------
const timeline1D = gsap.timeline({
    scrollTrigger: {
        trigger: ".ville2",
        start: "40% top",   //-----40-top
        end: "bottom 10%",   //-----bottom 10
        scrub: 1,
        //markers: true
    }
});
//-----mouvement panache-----
timeline1D.to(".panache2", 
    { yPercent: 100,
});
//-----mouvement ville------
timeline1D.to(".ville2", {
    yPercent: 150, 
    ease: "none"
}, "<");       //-----"<" = commence en même temps que le panache2

//-----apparition ville sombre ------
timeline1D.fromTo(".villeSombre",
    { opacity: 0 },
    { opacity: 1, duration: 1 }, ">"
);



    // -------------------- Section 3 - Ilé ---------------------------------------------------------------------


//-----mouvement scale et deplacement de l'image de fond ------
gsap.to('.part3-base', {

    //état final
    scale: 1.5, 
    x: "-10%",      
    ease: "power1.out", //power1.out = zoom out

    //Déclanchement au  scroll
    scrollTrigger: {
        trigger: ".partie3",
        start: "top 10%",
        end: "bottom top",
        scrub: true, //relie au scroll
        // markers: true
    }
});

//-----apparition et descente de la nuée ------
    gsap.to('.part3-nuee', {

        opacity: 1,
        y: 1500,

        scrollTrigger: {
            trigger: ".partie3",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            //markers: true,

        }
    });


    // -------------------- Section 4 - Ilé --------------------

    const cendreMontante = document.getElementById("cendre-montante");
    const part4Base = document.querySelector(".part4-base");

    //Essai d'intégration de la timeline pour le zoom out
    const timeline4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".partie4",
            start: "top 80%",
            end: "bottom top",
            scrub: true,
            //markers: true
        }
    });

    //Application de la timeline - Essai du FromTo (pratique !)
    timeline4.fromTo(part4Base,
        {scale: 2}, // état de début
        { scale: 1, y:-100, ease: "power1.out" } // état de fin
    )

    //Utilisation différente nécéssaire pour les cendres
    //Permet l'indépendence de l'animation
    ScrollTrigger.create({
        trigger: ".partie4",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true,

        onUpdate: (self) => {
            // Génère une particule
            const particule = spawnCendre();

            // Anime la particule
            gsap.fromTo(particule,
                { opacity: 1, y: 0, scale: 1.5},
                { y: 1920, opacity: 0, duration: 5, ease: "none", scale: 1}
            );

            // Montée du tas de cendres
            const progress = self.progress; //récupère la valeur du scroll entre 0 et 1
            cendreMontante.style.height = (progress * 50) + "%"; //Lorsque valeur de scroll 1 hauteur = 50%
        }
    });

}

