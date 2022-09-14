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


// HORISONTAL
const items = document.querySelectorAll("#horizontal-list li");
scroll(
  animate("#horizontal-list", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horizontal-section") }
);

//hurtige facts staggeranimation
inView(".staggeranimation", () => {
  animate(
    ".staggeranimation",
    { opacity: [0, 1] },
    { duration: 2, delay: stagger(1, { start: 0.5 }) }
  );
});

//hurtige facts typewriter effect
var app = document.getElementById("type_animation_millioner");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter.typeString("2 millioner").pauseFor(8000).deleteAll().start();

var app = document.getElementById("type_animation_sekund");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter.typeString("16. sekund").pauseFor(8000).deleteAll().start();

var app = document.getElementById("type_animation_2_gange");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter.typeString("2 gange").pauseFor(8000).deleteAll().start();

//hurtige facts parallax
document
  .querySelectorAll(".parallaxcontainer_hurtige_facts")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector(".hurtig_para");
    scroll(animate(elementderskalparallaxes2, { y: [-100, 150] }), {
      target: elementderskalparallaxes2,
    });
  });

//en ny begyndelse video parallax
document
  .querySelectorAll(".parallaxcontainer_en_ny_begyndelse_video")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector(".en_ny_para");
    scroll(animate(elementderskalparallaxes2, { y: [-100, 150] }), {
      target: elementderskalparallaxes2,
    });
  });

//men pierre parallax
document
  .querySelectorAll(".parallaxcontainer_men_pierre")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector(".men_pierre_para");
    scroll(animate(elementderskalparallaxes2, { y: [50, 500] }), {
      target: elementderskalparallaxes2,
    });
  });





const mediaQuery = window.matchMedia("(min-width: 1024px)");


document.querySelectorAll(".stockParallax").forEach(( parallaxcontainer ) => {
  const stocktextsparallax = parallaxcontainer.querySelector("p");
  scroll(animate(stocktextsparallax, { y: [10, 300] }), {
    target: stocktextsparallax
  });
});


if (mediaQuery.matches) {document.querySelectorAll(".stockFotos").forEach(( parallaxcontainer ) => {
  const stocktextsparallax = parallaxcontainer.querySelector("img");
  scroll(animate(stocktextsparallax, { y: [300, -10] }), {
    target: stocktextsparallax
  });
});
}



// if (mediaQuery.matches) {
//   scrollDesk();
// }

// function scrollDesk() {
//   window.addEventListener("scroll", function () {
//     const target = this.document.querySelector(".stockText");
//     console.log(window.pageYOffset);
//     var scrolled = window.pageYOffset;
//     var rate = scrolled * -0.5;
//     target.style.transform = "translate3d(0px, " + rate + "px, 0px)";
//   });
// }
// if (inView)
// {scrollDesk();
// }