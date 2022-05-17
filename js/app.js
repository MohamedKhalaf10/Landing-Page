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

// Put nav ul into a variable
const navUl = document.getElementById("navbar__list");

// Create a fragment
const navFragment = document.createDocumentFragment();

// Put sections into an array
const sections = [...document.querySelectorAll("section")];

// build the nav

// looping over the sections array
for (const section of sections) {
  // Create lists
  const newList = document.createElement("li");

  // Create links
  const newLink = document.createElement("a");

  // Adding text into links using each section's data-nav value
  newLink.innerHTML = section.getAttribute("data-nav");

  // Adding the the same section's data-nav value to the links
  newLink.setAttribute("data-nav", section.getAttribute("data-nav"));

  // Add 'menu__link' class to the links
  newLink.classList.add("menu__link");

  // Append links to lists
  newList.appendChild(newLink);
  // Append lists to the fragment
  navFragment.appendChild(newList);
}
// Append the fragment to the Ul
navUl.appendChild(navFragment);

// Put links into an array
const links = [...document.querySelectorAll("a")];

// Scroll to anchor ID using scrollTO event

// Looping over links array
for (const link of links) {
  // Add click event listner to the links
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Looping over sections array
    for (const section of sections) {
      if (link.innerHTML === section.getAttribute("data-nav")) {
        // Scroll to sections smoothly on link click
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

// Add class 'active' to section when near top of viewport

// Create scroll event listener
window.addEventListener("scroll", () => {
  // Looping over sections array
  for (const section of sections) {
    // Set a variable for the value of the section position
    const sectionTop = section.getBoundingClientRect().top;

    // Add active class to sections
    if (sectionTop >= -200 && sectionTop <= 200) {
      section.classList.add("your-active-class");

      // Looping over links array
      for (const link of links) {
        // Add active class to links
        if (link.innerHTML === section.getAttribute("data-nav")) {
          link.classList.add("active");
        }

        // Remove active class from links
        else {
          link.classList.remove("active");
        }
      }
    }

    // Remove active class from sections
    else {
      section.classList.remove("your-active-class");
    }
  }
});
