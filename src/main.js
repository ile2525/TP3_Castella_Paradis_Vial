import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

gsap.to('.square', {
	x: 1000,
    duration : 5,
})

import './style.css'
