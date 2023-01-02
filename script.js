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



// ---------- Get footer's dates ----------
const creationDate = 2022;


/**
 * Generate dates for footer
 * @param { Integer } creationDate
 */
function getFooterDates(creationDate) {
    const kalyosphereDates = document.querySelector(".kalyosphere-dates");
    let curentDate = new Date().getFullYear();
    if (curentDate === creationDate) {
        kalyosphereDates.innerText = creationDate.toString();
    } else {
        kalyosphereDates.innerText = `${creationDate.toString()}-${curentDate}`
    };
};


getFooterDates(creationDate);
