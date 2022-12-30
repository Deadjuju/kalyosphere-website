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
