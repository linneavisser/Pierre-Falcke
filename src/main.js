import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, glide, inView, scroll, timeline } from "motion";

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
    scroll(animate(elementderskalparallaxes2, { y: [-200, 500] }), {
      target: elementderskalparallaxes2,
    });
  });

// parallax stock-fotos

const mediaQuery = window.matchMedia("(min-width: 1024px)");

document.querySelectorAll(".stockParallax").forEach((parallaxcontainer) => {
  const stocktextsparallax = parallaxcontainer.querySelector("p");
  scroll(animate(stocktextsparallax, { y: [10, 300] }), {
    target: stocktextsparallax,
  });
});

if (mediaQuery.matches) {
  document.querySelectorAll(".stockFotos").forEach((parallaxcontainer) => {
    const stocktextsparallax = parallaxcontainer.querySelector("img");
    scroll(animate(stocktextsparallax, { y: [200, 0] }), {
      target: stocktextsparallax,
    });
  });
}

//info bubblessssss

function showAnalog() {
  document.querySelector("#analogInfo").classList.remove("hidden");
}
function hideAnalog() {
  document.querySelector("#analogInfo").classList.add("hidden");
}
function showGlitch() {
  document.querySelector("#glitchInfo").classList.remove("hidden");
}
function hideGlitch() {
  document.querySelector("#glitchInfo").classList.add("hidden");
}
function showLomo() {
  document.querySelector("#lomoInfo").classList.remove("hidden");
}
function hideLomo() {
  document.querySelector("#lomoInfo").classList.add("hidden");
}

document.querySelector("#analogPic").addEventListener("click", showAnalog);
document.querySelector(".closeInfo").addEventListener("click", hideAnalog);
document.querySelector("#glitchPic").addEventListener("click", showGlitch);
document.querySelector("#closeGlitch").addEventListener("click", hideGlitch);
document.querySelector("#lomoPic").addEventListener("click", showLomo);
document.querySelector("#closeLomo").addEventListener("click", hideLomo);

// førsøk til typewriter quote
const quote = document.getElementById("bQuote");
var i = 0;
var txt = 'Om ganske få år er hele branchen digital, og dem der ikke hopper med på den digitale vogn, lukker.';
var speed = 60;

inView(quote, () => {
  console.log("Element has entered the viewport")
  typeWriter()
});

function typeWriter() {
  if (i < txt.length) {
  document.getElementById("berømmelseQuote").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}
/* animation af billederne af bogen */

/* animation af billedgalleri */
inView(".fotogalleryinview_1", ({ target }) => {
  animate(
    target.querySelectorAll("img"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});

inView(".fotogalleryinview_2", ({ target }) => {
  animate(
    target.querySelectorAll("img"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});

/* bogen kommer fra siden af*/
inView(".billedet_af_bogen", () => {
  animate(".billedet_af_bogen", { x: [-2000, 0] }, { duration: 1 });
});

// det interessandte parallax
document
  .querySelectorAll(".parallaxcontainer_det_interessandte")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 = parallaxcontainer.querySelector(
      ".det_interessandte_para"
    );
    scroll(animate(elementderskalparallaxes2, { y: [-150, 200] }), {
      target: elementderskalparallaxes2,
    });
  });

//video zoom
const lillevideo = document.querySelector("#videofil");
lillevideo.pause();

scroll(
  ({ y }) => {
    if (!lillevideo.readyState) return;
    lillevideo.currentTime = lillevideo.duration * y.progress;
  },
  {
    target: document.querySelector(".videoarticle"),
    offset: ["-100vh", "end end"],
  }
);

/* tekst stykket: som Pierre fortæller det */
document
  .querySelectorAll(".parallaxcontainer_som_pierre")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 = parallaxcontainer.querySelector(
      ".pierre_fortaeller_para"
    );
    scroll(animate(elementderskalparallaxes2, { y: [-200, 500] }), {
      target: elementderskalparallaxes2,
    });
  });

/* tekst stykket: bestil Pierres bog */
document
  .querySelectorAll(".parallexcontainer_bestil_bogen")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector(".bestil_bogen_para");
    scroll(animate(elementderskalparallaxes2, { y: [-200, 500] }), {
      target: elementderskalparallaxes2,
    });
  });

/* billederne af lidt i fem preview*/
document
  .querySelectorAll(".parallaxcontainer_pics_lidt_i_fem")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector(".lidt_i_fem_para");
    scroll(animate(elementderskalparallaxes2, { y: [-200, 500] }), {
      target: elementderskalparallaxes2,
    });
  });
