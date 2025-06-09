/* ---------- DATA ---------- */
const teamMembers = [
    {
        name: "Michel Garcia",
        position: "President",
        expertise: "High expertise<br>in natural resource assessment & company executive",
        photo: "./img/profile-mg-725.jpeg",
        linkedin: "https://www.linkedin.com/in/michel-h-garcia"
    },
    {
        name: "Alfazazi Dourfaye",
        position: "Business Dev. Dir.",
        expertise: "High expertise<br>in drilling technology & company executive",
        photo: "./img/profile-ad-725.jpeg",
        linkedin: "https://www.linkedin.com/in/dr-alfazazi-dourfaye"
    },
    {
        name: "Alain Rabaute",
        position: "Exploration Dir.",
        expertise: "High expertise<br>in geological exploration & company executive",
        photo: "./img/profile-ar-725.jpeg",
        linkedin: "https://www.linkedin.com/in/alainrabaute"
    },
    {
        name: "Sylvain Sarda",
        position: "Financial Dir.",
        expertise: "High expertise<br>in reservoir engineering & energy/infra project financing",
        photo: "./img/profile-ss-725.jpg",
        linkedin: "https://www.linkedin.com/in/sylvain-sarda-23a40b5"
    }
];

/* ---------- VIEW ---------- */
function createTeamCard(member) {
    /* colonne flex pour égaliser les hauteurs */
    const col = document.createElement("div");
    col.className = "col d-flex align-items-stretch";

    /* carte Bootstrap */
    const card = document.createElement("div");
    card.className = "col card";

    /* 1. Header -------------------------------------------------- */
    const header = document.createElement("div");
    header.className = "card-header d-flex align-items-center";

    const img = document.createElement("img");
    img.src = member.photo;
    img.alt = `Picture ${member.name}`;
    img.className = "w-25 h-auto rounded-circle";

    const headTxt = document.createElement("div");
    headTxt.className =
        "w-100 h-100 mx-auto p-1 d-flex flex-column justify-content-center text-center fw-bold";
    headTxt.innerHTML = `
          <p class="m-0 fs-4">${member.name}</p>
          <p class="m-0 fs-4" style="font-weight: normal;">${member.position}</p>
    `;

    header.append(img, headTxt);

    /* 2. Body ----------------------------------------------------- */
    const body = document.createElement("div");
    body.className = "card-body";

    const bodyTxt = document.createElement("div");
    bodyTxt.className = "card-text text-center fs-4 px-0 px-sm-0";
    bodyTxt.innerHTML = member.expertise;

    body.appendChild(bodyTxt);

    /* 3. Footer --------------------------------------------------- */
    const footer = document.createElement("div");
    footer.className = "card-footer";

    footer.innerHTML = `
        <a href="${member.linkedin}" target="_blank"
           class="bg-linkedin d-inline-block h-100 p-1 mx-auto"
           rel="noopener noreferrer">
           <span class="sr-only">Go to ${member.name} Linkedin page</span>
           <img src="./img/linkedin.svg" alt="LinkedIn logo" class="h-100">
        </a>
    `;

    /* Assemblage final ------------------------------------------- */
    card.append(header, body, footer);
    col.appendChild(card);

    return col;
}

/* ---------- CONTROLLER ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const teamRow = document.getElementById("team-row");
    teamMembers.forEach((m) => teamRow.appendChild(createTeamCard(m)));
});