import Icon from './img/icon.svg';
import IntroPic from './img/img.png';
import Menu from './img/drink.png';
import Yoda from './img/yoda.png';
import Concert from './img/concert.png';

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

const overview = () => {
    const overview = document.createElement('div');
    overview.classList.add('overview');

    const overviewText = document.createElement('h2');
    overviewText.textContent = 'A Galactic Experience';
    
    const overviewCards = document.createElement('div');
    overviewCards.classList.add('overview-cards');
    
    const card1 = document.createElement('div');
    card1.classList.add('card');
    const card1Img = document.createElement('img');
    card1Img.src = Menu;
    card1Img.alt = 'Galactic Cantina menu';
    const card1Text = document.createElement('h3');
    card1Text.textContent = 'Taste the Flavors of the Galaxy';
    const card1Desc = document.createElement('p');
    card1Desc.textContent = 'Indulge in a menu featuring creative interpretations of classic dishes with a galactic twist'
    card1.appendChild(card1Img);
    card1.appendChild(card1Text);
    card1.appendChild(card1Desc);
    overviewCards.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('card');
    const card2Img = document.createElement('img');
    card2Img.src = Yoda;
    card2Img.alt = 'Yoda inspired drink';
    const card2Text = document.createElement('h3');
    card2Text.textContent = ' Raise Your Glass to Adventure';
    const card2Desc = document.createElement('p');
    card2Desc.textContent = 'Sip on signature drinks served in unique glassware, inspired by iconic characters, planets, and events from the Star Wars universe'
    card2.appendChild(card2Img);
    card2.appendChild(card2Text);
    card2.appendChild(card2Desc);
    overviewCards.appendChild(card2);

    const card3 = document.createElement('div');
    card3.classList.add('card');
    const card3Img = document.createElement('img');
    card3Img.src = Concert;
    card3Img.alt = 'Galactic Cantina concert';
    const card3Text = document.createElement('h3');
    card3Text.textContent = 'Live Music and Entertainment';
    const card3Desc = document.createElement('p');
    card3Desc.textContent = 'Be entertained by intergalactic music, alien dance performances, and captivating shows that transport you deeper into the Star Wars universe'
    card3.appendChild(card3Img);
    card3.appendChild(card3Text);
    card3.appendChild(card3Desc);
    overviewCards.appendChild(card3);

    const content = document.querySelector('div#content');
    overview.appendChild(overviewText);
    overview.appendChild(overviewCards);
    content.appendChild(overview);
};

export { navigationBar, intro, overview };