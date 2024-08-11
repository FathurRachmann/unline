import { gsap } from "gsap";

export function animateHeader() {
  gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
}

export function animateFooter() {
  gsap.from("footer", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
}
