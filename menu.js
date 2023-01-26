const menuList = [
  {
    name: "Kalyosphere",
    href: "#essence",
  },
  {
    name: "Strategy",
    href: "#strategy",
  },
  {
    name: "Team",
    href: "#team",
  },
  {
    name: "Business network",
    href: "#affiliated-business",
  },
  {
    name: "Deeptech R&D",
    href: "#rd-project",
  },
  {
    name: "Case studies",
    href: "#case-studies",
  },
  {
    name: "Publications",
    href: "#publications",
  },
  {
    name: "Business Support",
    href: "#business-support",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const classListLittleScreen = ["nav-link fs-5 mx-4 mx-md-2"];
const classListBigScreen = ["nav-link fs-5 mx-4 mx-md-2 my-auto"];

const bigScreenMenu = document.querySelector(".big-screen-menu");
const littleScreenMenu = document.querySelector(".hamburger-menu");

/**
 * Create menu links according to screen sizes
 * @param { string } menu
 * @param { string } name
 * @param { string } href
 * @param { Array } classList
 */
function createLinkToggleMenu(menu, name, href, classList) {
  const navLink = document.createElement("a");
  navLink.classList = classList;
  navLink.href = href;
  navLink.innerText = name;
  menu.appendChild(navLink);
}

// Create menu links for little screen
menuList.map((link) =>
  createLinkToggleMenu(
    littleScreenMenu,
    link.name,
    link.href,
    classListLittleScreen
  )
);

// Create menu links for big screen
menuList.map((link) =>
  createLinkToggleMenu(bigScreenMenu, link.name, link.href, classListBigScreen)
);
