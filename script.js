// ---------- Show / Hide navbar ----------

const navBar = document.querySelector(".navbar");
const webPage = document.querySelector("#website");
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

// // ---------- top coming soon section ----------
// const comingSoonSection = document.querySelector("#coming-soon");
// comingSoonSection.style.top = `${navHeight}px`;
// function getTopCommingSoonSection() {
//   const currentNavHeight = navBar.offsetHeight;
//   comingSoonSection.style.top = `${currentNavHeight}px`;
// }
// window.onresize = getTopCommingSoonSection;

// ---------- top home section ----------
const homeSection = document.querySelector("#home");
const homeTitles = document.querySelectorAll("#home h2");

homeSection.style.top = `${navHeight}px`;

let titlesCounter = 0;

function showTitles() {
  homeTitles[titlesCounter].classList.remove("home-h2-transparent");
  if (titlesCounter < homeTitles.length - 1) {
    titlesCounter++;
  } else {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(showTitles, 500);

function getTopHomeSection() {
  const currentNavHeight = navBar.offsetHeight;
  homeSection.style.top = `${currentNavHeight}px`;
}
window.onresize = getTopHomeSection;


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
