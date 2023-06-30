import './css/normalize.css';
import './css/home.css';
import './css/pageLoad.css';
import './css/menu.css';
import './css/aboutUs.css';
import './css/FAQ.css';
import pageLoad from './functions/pageLoad';
import deleteContent from './functions/deleteContent';
import home from './pages/home.js';
import {contact} from './pages/home.js';
import menu from './pages/menu.js';
import aboutUs from './pages/aboutUs.js';
import reviewPage from './pages/reviews';
import FAQ from './pages/FAQ';

// helper method to load home page
const loadHome = () => {
    deleteContent();
    home();
};

// helper method to load menu page
const loadMenu = () => {
    deleteContent();
    menu();
};

// helper method to load contact page
const loadContact = () => {
    deleteContent();
    contact();
}

// helper method to load about us page
const loadAboutUs = () => {
    deleteContent();
    aboutUs();
}

// helper method to load review page
const loadReviewPage = () => {
    deleteContent();
    reviewPage();
}

// helper method to load FAQ page
const loadFAQ = () => {
    deleteContent();
    FAQ();
}

pageLoad(); // Display header and footer
loadHome(); // Display home page content

/* ------------------------------------Event Listeners for Home Page ------------------------------------ */

// If clicked on logo icon or text, delete content and load home page
document.querySelectorAll('.logo-box a').forEach(link => {
    link.addEventListener('click', () => {
        loadHome();
    });
});

// If clicked on home, delete content and load home page
document.querySelector('.nav-links a:nth-child(1)').addEventListener('click', () => {
    loadHome();
});

/* ------------------------------------Event Listeners for Menu Page ------------------------------------ */


// If clicked on menu, delete content and load menu page
document.querySelector('.nav-links a:nth-child(2)').addEventListener('click', () => {
    loadMenu();
});

/*-----------------------------------Event Listeners for buttons and links that change dynamically -----------------------------------*/

/* If i switched from home page to another page and return back to home page, the buttons or link on the home page
   will not work as the buttons/link was dynamically replaced or modified, and the event listener wouldn't be attached 
   to the new element. So I delegated the event listener to the parent element #content which doesn't change dynamically. 
   Thus, the event listener remains in place even if the button is replaced or modified. The event listener then listens 
   for events on the parent element and checks if the event target matches the selector.
*/
document.querySelector('#content').addEventListener('click', (event) => {
    // for menu button in home page
    if (event.target.closest('.intro button')) {
      loadMenu();
    }

    // to show additional reviews button in home page
    if (event.target.closest('.more-reviews')) {
        loadReviewPage();
    }

    // to show FAQ page from home page
    if (event.target.closest('.more-info-link')) {
        loadFAQ();
    }

});

/* ------------------------------------Event Listeners for Contact Page ------------------------------------ */

document.querySelector('.nav-links a:nth-child(3)').addEventListener('click', () => {
    loadContact();
});

/* ------------------------------------Event Listeners for Contact Page ------------------------------------ */

document.querySelector('.nav-links a:nth-child(4)').addEventListener('click', () => {
    loadAboutUs();
});
