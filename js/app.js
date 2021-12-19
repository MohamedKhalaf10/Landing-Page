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
const navUl = document.getElementById('navbar__list');

const navFragment = document.createDocumentFragment();

// Putting sections into variables

const sec1 = document.getElementById('section1');
const sec2 = document.getElementById('section2');
const sec3 = document.getElementById('section3');
const sec4 = document.getElementById('section4');

const options = {

    root: null,
    rootMargin: '0px',
    threshold: 0.63
};




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

// build the nav

for( let i = 1; i <= 4; i++ ) {
const newLi = document.createElement('li');
const newLink = document.createElement('a');
let sectionId = `section${i}`;

newLink.innerHTML = document.getElementById(sectionId).getAttribute('data-nav');
newLink.setAttribute("data-nav", `Section ${i}`);
newLink.classList.add('menu__link') ;

newLi.append(newLink);
navFragment.append(newLi);
}
navUl.append(navFragment);


// Add class 'active' to section when near top of viewport

const callback = function(element) {
    const links = document.querySelectorAll('a');

    if(element[0].isIntersecting === true) {

        element[0].target.classList.add('your-active-class');
        links.forEach (function(link){
            if ( link.textContent === element[0].target.getAttribute('data-nav') ){
                link.classList.add('active');
            }
            else{
                link.classList.remove('active');
            }
        });
    }
    else {
        element[0].target.classList.remove('your-active-class');
    }
};



// Scroll to anchor ID using scrollTO event

function smoothScroll (link, secNumber){
    
    link.addEventListener('click', function() {
        secNumber.scrollIntoView({behavior: "smooth"});
    });
    
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

smoothScroll ( document.querySelector("[data-nav='Section 1']"), sec1);

smoothScroll ( document.querySelector("[data-nav='Section 2']"), sec2);

smoothScroll ( document.querySelector("[data-nav='Section 3']"), sec3);

smoothScroll ( document.querySelector("[data-nav='Section 4']"), sec4);


// Set sections as active

window.addEventListener("scroll", function(){

    const sections = [...document.querySelectorAll('section')];
    const observer = new IntersectionObserver(callback, options);
    
    sections.forEach(function(section){
        observer.observe(section);
    });
});