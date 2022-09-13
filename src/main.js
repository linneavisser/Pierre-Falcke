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
     transform: ["none", `translateX(-${items.length - 1}00vw)`]
   }),
   { target: document.querySelector("#horizontal-section") }
 );


//

animate(
  ".staggeranimation li",
  { opacity: [0, 1] },
  {
    delay: stagger(1, { start: 2 }),
  }
);

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


















// STOCK-FOTO SECTION

// inView( ".fotogalleryinview" , ({ target }) =>{
//   animate( target.querySelectorAll("img") , { x: [-2000, 0 ] }, 
//   { duration: 1, delay: stagger(1, { start: 0.25 }) 
//   })
// })
document.querySelectorAll(".fotogalleryinview > img").forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"]
  });
});