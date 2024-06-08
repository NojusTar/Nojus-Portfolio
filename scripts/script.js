// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // gsap code here!
  gsap.from("#portfolio", { duration: 1, opacity: -0.5, ease: "power2" });
  gsap.from("#about", { duration: 1, opacity: -0.5, ease: "power2" });
  gsap.from("#projects", { duration: 2, opacity: -0.5, ease: "power2" });
  gsap.from("#left-left", {
    duration: 2,
    opacity: -0.5,
    ease: "power2",
    delay: 1,
  });
  gsap.from("#left-right", {
    duration: 2,
    opacity: -0.5,
    ease: "power2",
    delay: 1.2,
  });

  $("#projects").click(function () {
    gsap.to("#main", { duration: 1, scrollTo: { x: "max" } });
  });

  $("#about").click(function () {
    gsap.to("#main", { duration: 1, scrollTo: { x: 0 } });
  });
});
