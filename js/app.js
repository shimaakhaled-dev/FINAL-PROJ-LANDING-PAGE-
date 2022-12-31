/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const menuList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//build nav bar with li element

for (let i = 0; i < sections.length; i++) {
  const list = document.createElement("li");
  const a = `<a class="menu__link" href="#${sections[i].id}" data-nav="#${sections[i].id}"> ${sections[i].dataset.nav}</a>`;
  menuList.appendChild(list);
  list.innerHTML = a;
}

let aa = document.querySelectorAll(".menu__link");
//bounding & active Class
window.onscroll = function () {

  //section active
  sections.forEach((actvSection) => {
    if (
      actvSection.getBoundingClientRect().top >= -400 &&
      actvSection.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      //calling navbar active class
      setActivity(aa, actvSection);
      // Add class 'active' to section when near top of viewport
      actvSection.classList.add("your-active-class");
    } else {
      // remove class 'active' to section when near top of viewport
      actvSection.classList.remove("your-active-class");
    }
  });
};
//navbar activie
function setActivity(actvnav, actvSection) {
  actvnav.forEach((ele) => {
    if (`#${actvSection.id}` === ele.dataset.nav) {
      ele.classList.add("activeLink");
    } else {
      ele.classList.remove("activeLink");
    }
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to anchor ID using scrollTO event smoothely
aa.forEach((b)=>{
b.addEventListener("click", (event) => {
  //to prevent scrolling to section while clicking anywhere
  event.preventDefault();
 document.querySelector(event.target.dataset.nav).scrollIntoView({ behavior: "smooth" });
});});



