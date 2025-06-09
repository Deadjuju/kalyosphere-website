/* ===== DATA ===== */

const mentors = [
    {
        name: "Jean-Paul Chéno",
        title: "Founder & managing director at OTAGO Consulting, expert in fundraising",
        img: "./img/linkedin-cheno.jpg",
        linkedin: "https://www.linkedin.com/in/jeanpaulcheno"
    },
    {
        name: "Laetitia Pfeiffer",
        title: "Partner Innovative Strategy at One Point, expert in communication",
        img: "./img/linkedin-pfeiffer.jpg",
        linkedin: "https://www.linkedin.com/in/laetitiapfeiffer"
    }
    // ➕ ajoutez / retirez ici
];

const committee = [
    {
        name: "Eric Déliac",
        title: "President at LUY RESOURCES, expert in energy",
        img: "./img/linkedin-deliac.jpg",
        linkedin: "https://www.linkedin.com/in/eric-deliac-694279"
    },
    {
        name: "Christophe Maisons",
        title: "Ex-founder of Magnitude, ex-BakerHughes, expert in geoscience innovation",
        img: "./img/linkedin-maisons.jpg",
        linkedin: "https://www.linkedin.com/in/christophe-maisons-9448974"
    },
    {
        name: "Peter Meier",
        title: "CEO at GEO ENERGIE SUISSE, expert in deep geothermal energy",
        img: "./img/linkedin-meier.jpg",
        linkedin: "https://www.linkedin.com/in/peter-meier-00272666"
    },
    {
        name: "David Foulon",
        title: "Board member Attentive Energy… expert in renewable energies",
        img: "./img/linkedin-foulon.jpg",
        linkedin: "https://www.linkedin.com/in/davidfoulon"
    },
    {
        name: "Pascal Le Mélinaire",
        title: "President at Sweetch Energy, expert in organisation development",
        img: "./img/linkedin-le-melinaire.jpg",
        linkedin: "https://www.linkedin.com/in/pascallemelinaire"
    },
    {
        name: "Regis Le Bars",
        title: "Financing & promotion manager at ADEME",
        img: "./img/linkedin-le-bars.jpg",
        linkedin: "https://www.linkedin.com/in/regis-le-bars-2307a383"
    },
    {
        name: "Laurent Labat",
        title: " Product management director at Aspentech",
        img: "./img/linkedin-labat.jpg",
        linkedin: "https://www.linkedin.com/in/laurentlabat"
    }
    // ➕ ajoutez / retirez ici
];

/* ===== VIEW ===== */

function createCard(person) {
    // colonne flex
    const col = document.createElement("div");
    col.className = "mentor-comittee-card d-flex align-items-stretch";

    // carte
    const card = document.createElement("div");
    card.className = "col card";

    // header
    const header = document.createElement("div");
    header.className = "card-header d-flex align-items-center";

    const img = document.createElement("img");
    img.src = person.img;
    img.alt = `Picture ${person.name}`;
    img.className = "w-25 h-auto rounded-circle";

    const headTxt = document.createElement("div");
    headTxt.className = "w-100 h-100 mx-auto p-1 d-flex flex-column "
        + "justify-content-center text-center fw-bold";
    headTxt.innerHTML = `<p class="m-0 fs-4">${person.name}</p>`;

    header.append(img, headTxt);

    // body
    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `<div class="card-text text-center fs-4 px-0 px-sm-0">
                         ${person.title}
                      </div>`;

    // footer
    const footer = document.createElement("div");
    footer.className = "card-footer";
    footer.innerHTML = `
      <a href="${person.linkedin}" target="_blank"
         class="bg-linkedin d-inline-block h-100 p-1 mx-auto"
         rel="noopener noreferrer">
          <span class="sr-only">Go to ${person.name} Linkedin page</span>
          <img src="./img/linkedin.svg" alt="LinkedIn logo" class="h-100">
      </a>`;

    // assemblage
    card.append(header, body, footer);
    col.appendChild(card);
    return col;
}

/* ===== CONTROLLER ===== */

document.addEventListener("DOMContentLoaded", () => {
    const mentorsRow = document.getElementById("mentors-row");
    const committeeRow = document.getElementById("committee-row");

    mentors.forEach(m => mentorsRow.appendChild(createCard(m)));
    committee.forEach(c => committeeRow.appendChild(createCard(c)));
});