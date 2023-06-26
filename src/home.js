import Icon from './img/icon.svg';
import IntroPic from './img/img.png';

const navigationBar = () => {

    const bar = document.createElement('div');
    bar.classList.add('nav-bar');

    const logoBox = document.createElement('div');
    logoBox.classList.add('logo-box');
    const logo = document.createElement('img');
    logo.src = Icon;
    logo.alt = 'Galactic Cantina logo';
    logoBox.appendChild(logo);
    const logoText = document.createElement('h1');
    logoText.textContent = 'Galactic Cantina';
    logoBox.appendChild(logoText);

    const navLinks = document.createElement('div');
    navLinks.classList.add('nav-links');

    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    navLinks.appendChild(homeLink);

    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';
    navLinks.appendChild(menuLink);

    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.textContent = 'Contact';
    navLinks.appendChild(contactLink);

    const AboutLink = document.createElement('a');
    AboutLink.href = '#';
    AboutLink.textContent = 'About';
    navLinks.appendChild(AboutLink);
    
    bar.appendChild(logoBox);
    bar.appendChild(navLinks);

    const content = document.querySelector('div#content');
    content.appendChild(bar);
};

const intro = () => {
    const intro = document.createElement('div');
    intro.classList.add('intro');

    const introContent = document.createElement('div');
    introContent.classList.add('intro-content');

    const introText = document.createElement('p');
    introText.textContent = "Whether you're a die-hard fan of the Rebel Alliance or "
    + "are drawn to the enigmatic allure of the Dark Side, the Galactic Cantina is a "
    + "place where all are welcome. Come, join us in this cosmic rendezvous, where good food, "
    + "good company, and the spirit of Star Wars blend to create an unforgettable experience. " 
    + "Step into the Galactic Cantina, and let the force of flavor and adventure guide your gastronomic "
    + "journey like never before. May the flavor be with you!"

    const menuButton = document.createElement('button');
    menuButton.textContent = 'View Menu';

    const introImg = document.createElement('img');
    introImg.src = IntroPic
    introImg.alt = 'Galactic Cantina interior';

    introContent.appendChild(introText);
    introContent.appendChild(menuButton);
    intro.appendChild(introContent);
    intro.appendChild(introImg);

    const content = document.querySelector('div#content');
    content.appendChild(intro);
};

export { navigationBar, intro };