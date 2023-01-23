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

// ---------- top coming soon section ----------
const comingSoonSection = document.querySelector("#coming-soon");
comingSoonSection.style.top = `${navHeight}px`;
function getTopCommingSoonSection() {
  const currentNavHeight = navBar.offsetHeight;
  comingSoonSection.style.top = `${currentNavHeight}px`;
}
window.onresize = getTopCommingSoonSection;

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

  if (menu.classList.contains("slide-in-menu")) {
    menu.classList.remove("slide-in-menu");
    menu.classList.add("hidden");
  } else {
    menu.classList.remove("hidden");
    menu.classList.add("slide-in-menu");
  }
});
