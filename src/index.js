import './css/normalize.css';
import './css/home.css';
import './css/pageLoad.css';
import pageLoad from './functions/pageLoad';
import loadHome from './pages/home.js';
import deleteContent from './functions/deleteContent';

pageLoad(); // Display header and footer
loadHome(); // Display home page content

document.querySelectorAll('.logo-box a').forEach(link => {
    link.addEventListener('click', () => {
        deleteContent();
        loadHome();
    });
});