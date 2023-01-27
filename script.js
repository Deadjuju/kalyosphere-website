const smallScreenSize = 768;

// ---------- Show / Hide navbar ----------

const navBar = document.querySelector(".navbar");
const navHeight = navBar.offsetHeight;

let lastScroll = 0;

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset;
  if (currentScroll - lastScroll > 0 && currentScroll > navHeight) {
    // Scroll Down -- nav hide
    navBar.style.top = `-${navHeight}px`;
  } else {
    // scrolled up -- nav show
    navBar.style.top = "0px";
  }
  lastScroll = currentScroll;
});


// ---------- top home section ----------
const homeSection = document.querySelector("#home");
const homeTitles = document.querySelectorAll("#home h2");
const homeImg = document.querySelectorAll("#home img");

homeSection.style.top = `${navHeight}px`;

let titlesCounter = 0;

function showTitles() {
  homeTitles[titlesCounter].classList.remove("home-h2-transparent");
  homeImg[titlesCounter].classList.remove("home-h2-transparent");
  if (titlesCounter < homeTitles.length - 1) {
    titlesCounter++;
  } else {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(showTitles, 400);

function getTopHomeSection() {
  const currentNavHeight = navBar.offsetHeight;
  homeSection.style.top = `${currentNavHeight}px`;
}
window.onresize = getTopHomeSection;


// ---------- Adaptation of txt/img order in home section ----------

const homeSubtitlesH2 = document.querySelectorAll(".home__subtitles h2");
const homeSubtitlesImg = document.querySelectorAll(".home__subtitles img");

function changeOrderAccordingScreenSize() {
  if (document.body.offsetWidth <= smallScreenSize) {
    // alert("COINCOIN");
    homeSubtitlesH2.forEach((h2) => {
      h2.classList.add("order-0");
    });
    homeSubtitlesImg.forEach((img) => {
      img.classList.add("order-1");
    });
  } else {
    homeSubtitlesH2.forEach((h2) => {
      h2.classList.remove("order-0");
    });
    homeSubtitlesImg.forEach((img) => {
      img.classList.remove("order-1");
    });
  }
}

changeOrderAccordingScreenSize();
addEventListener("resize", () => {
  changeOrderAccordingScreenSize();
});

// ---------- Get footer's dates ----------
const creationDate = 2022;

/**
 * Generate dates for footer
 * @param { Integer } creationDate
 */
function getFooterDates(creationDate) {
  const kalyosphereDates = document.querySelector(".kalyosphere-dates");
  let currentDate = new Date().getFullYear();
  if (currentDate === creationDate) {
    kalyosphereDates.innerText = creationDate.toString();
  } else {
    kalyosphereDates.innerText = `${creationDate.toString()}-${currentDate}`;
  }
}

getFooterDates(creationDate);

// ---------- nav & menu ----------

const menu = document.querySelector(".nav-txt");
const hamburgerButton = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");

/**
 * Manages appearance and disappearance of the menu according to the size of the screen
 */
function toggleMenu() {
  const screenWidth = document.body.offsetWidth;
  if (screenWidth >= 1250) {
    menu.classList.remove("hidden");
    menu.classList.add("d-flex");
    menu.classList.add("flex-row");
    hamburgerButton.classList.add("d-none");
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("d-flex");
    menu.classList.remove("flex-row");
    hamburgerButton.classList.remove("d-none");
  }
}

toggleMenu();
window.onresize = toggleMenu;
hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("open");

  if (hamburgerMenu.classList.contains("slide-in-menu")) {
    hamburgerMenu.classList.remove("slide-in-menu");
    hamburgerMenu.classList.add("slide-out-menu");
  } else {
    hamburgerMenu.classList.add("slide-in-menu");
    hamburgerMenu.classList.remove("slide-out-menu");
  }
});
