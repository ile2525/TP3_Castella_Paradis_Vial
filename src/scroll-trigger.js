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
            end: "bottom bottom",
            scrub: true,
            //markers: true
        }
    })

//-----apparition plan 2 et narration 2----------------------------------------
    gsap.to([".v2", ".nar2"], {
        opacity: 1,

        scrollTrigger: {
            trigger: ".boxBottom",
            start: "+=50% bottom",
            end: "+=10% bottom",
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
            start: "+=70% 95%",
            end: "bottom bottom",
            scrub: true,
            //markers: true
        }
    })
    //-----fadeout-------------------------
    gsap.to(".fadeout", {
  opacity: 0.8,

  scrollTrigger: {
    trigger: ".balcon",
    start: "top bottom", 
    end: "+=25% bottom",
    scrub: true,
    markers: true
  }
})
//-----narration3 sur fadeout---------------------------------ca marche pas--------------
    gsap.to(".narration nar3", {
  opacity: 1,

  scrollTrigger: {
    trigger: ".balcon",
    start: "top bottom", 
    end: "+=25% bottom",
    scrub: true,
    markers: true
  }
})
    //-----fadin-------------------------
    gsap.to(".fadeout", {
  opacity: 0,

  scrollTrigger: {
    trigger: ".balcon",
    start: "top bottom", 
    end: "center bottom",
    scrub: true,
    markers: true
  }
})







    // -------------------- Section 3 - Ilé ---------------------------------------------------------------------
    




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
            //markers: true
        }

        
    })

    // -------------------- Section 4 - Ilé --------------------

    const cendreMontante = document.getElementById("cendre-montante");
    const part4Base = document.querySelector(".part4-base");

    const timeline4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".partie4",
            start: "top bottom",
            end: "bottom ",
            scrub: true,
            markers: true
        }
    });

    timeline4.fromTo(part4Base,
        { scale: 5},
        { scale: 1, ease: "power1.out" }
    )

    ScrollTrigger.create({
        trigger: ".partie4",
        start: "top bottom",
        end: "bottom -=200",
        scrub: true,
        markers: true,

        onUpdate: (self) => {
            // Génère une particule
            const particule = spawnCendre();

            // Anime la particule
            gsap.fromTo(particule,
                { opacity: 0 },
                { y: 1920, opacity: 1, duration: 10, ease: "none", scale: 1.5}
            );

            // Montée du tas de cendres
            const progress = self.progress;
            cendreMontante.style.height = (progress * 100) + "%";
        }
    });
}

