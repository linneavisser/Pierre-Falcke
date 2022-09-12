import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

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
