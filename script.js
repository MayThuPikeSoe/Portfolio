// sticky bar
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 0) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

// text typed

var typed = new Typed(".typing", {
  strings: ["Frontend Developer."],
  typeSpeed: 150,
  backSpeed: 80,
  loop: true,
});
// scoll reveal
const sr = ScrollReveal({
  origin: "left",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr.reveal(".reveal-left", { delay: 200 });
const sr1 = ScrollReveal({
  origin: "right",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr1.reveal(".reveal-right", { delay: 200 });

const sr2 = ScrollReveal({
  origin: "bottom",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr2.reveal(".reveal-bottom", { delay: 200 });
const sr3 = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr2.reveal(".reveal-top", { delay: 200 });

// loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 3000);
}
window.onload = fadeOut();
