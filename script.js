const allSections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav--link");
const styleSwitcherToggler = document.querySelector(
  ".style--switcher__toggler"
);
const alternateStyles = document.querySelectorAll(".alternate--style");
const colors = document.querySelector(".colors");
const dayNight = document.querySelector(".day--night");
const mainContent = document.querySelector(".main--content");
// document.querySelector(".home").classList.add("activ--section");

// events
navLinks.forEach((link) => {
  const id = link.getAttribute("href");
  //   console.log(id);
  link.addEventListener("click", function () {
    navLinks.forEach((el) => {
      el.classList.remove("active");
    });
    link.classList.add("active");
    allSections.forEach((section) => {
      section.classList.remove("active--section");
      if (`#${section.getAttribute("id")}` === id) {
        // console.log("yes");
        section.classList.add("active--section");
      }
    });
  });
});
styleSwitcherToggler.addEventListener("click", function () {
  document.querySelector(".style--switcher").classList.toggle("open");
});

dayNight.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  //   document.querySelector(".aside").classList.toggle("dark");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
});
window.addEventListener("load", function () {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.remove("fa-moon");
  } else {
    dayNight.querySelector("i").classList.remove("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

document.querySelectorAll(".hire--me").forEach((el) => {
  el.addEventListener("click", function () {
    allSections.forEach((e) => {
      e.classList.remove("active--section");
    });
    navLinks.forEach((e) => {
      e.classList.remove("active");
      if (e.getAttribute("href") === "#contact") e.classList.add("active");
    });
    document.querySelector(".contact").classList.add("active--section");
  });
});

// scroll to view
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// hide style switcher on window scroll
window.addEventListener("scroll", () => {
  document.querySelector(".style--switcher").classList.remove("open");
});

const setActiveStyle = function () {
  colors.addEventListener("click", function (e) {
    alternateStyles.forEach((style) => {
      if (style.getAttribute("title") !== "color--1")
        style.setAttribute("disabled", "true");

      if (e.target.getAttribute("class") === style.getAttribute("title"))
        style.removeAttribute("disabled");
    });
  });
};

setActiveStyle();

// typing
let typed = new Typed(".typing", {
  strings: ["web designer", "web developer", "graphic designer"],
  typeSpeed: 200,
  BackSpeed: 200,
  loop: true,
});

// intersection observer
// const activeLink = function (entries) {
//   const [entry] = entries; //or const entry = entries[0]
//   // console.log(entry);
//   const link = entry.target.getAttribute("id");
//   if (entry.isIntersecting) {
//     navLinks.forEach((el) => {
//       if (el.getAttribute("href") === `#${link}`) {
//         el.classList.add("active");
//       } else el.classList.remove("active");
//       // el.classList.remove("active")
//       //   el.classList.add("active");
//     });
//   }
// };

// const activeLinkOptions = {
//   root: null,
//   threshold: 0.2,
// };

// const mainObserver = new IntersectionObserver(activeLink, activeLinkOptions);
// allSections.forEach(function (section) {
//   mainObserver.observe(section);
//   // console.log("working intersection");
// });
