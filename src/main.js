import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("p");
  scroll(animate(elementderskalparallaxes, { y: [50, 500] }), {
    target: elementderskalparallaxes,
  });
});

document
  .querySelectorAll(".parallaxcontainermedflereelementer")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector(".paragraf2");
    scroll(animate(elementderskalparallaxes2, { y: [0, 800] }), {
      target: elementderskalparallaxes2,
    });
  });
