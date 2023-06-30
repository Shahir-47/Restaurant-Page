import Icon from '../assets/img/icon.svg';
import GitHub from '../assets/img/git.svg';

export const pageLoad = () => {

    const navigationBar = () => {

        const bar = document.createElement('div');
        bar.classList.add('nav-bar');

        const logoBox = document.createElement('div');
        logoBox.classList.add('logo-box');
        const logo = document.createElement('img');
        logo.src = Icon;
        logo.alt = 'Galactic Cantina logo';
        const logoLink = document.createElement('a');
        logoLink.appendChild(logo);
        logoBox.appendChild(logoLink);
        const logoText = document.createElement('h1');
        logoText.textContent = 'Galactic Cantina';
        const logoLink2 = document.createElement('a');
        logoLink2.appendChild(logoText);
        logoBox.appendChild(logoLink2);

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


    const footer = () => {
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        const gitHubProfile = document.createElement('a');
        gitHubProfile.href = 'https://github.com/Shahir-47';

        const gitHubProfileImg = document.createElement('img');
        gitHubProfileImg.src = GitHub;
        gitHubProfileImg.alt = 'gitHub Logo';
        

        const gitHubProfileText = document.createElement('p');
        const atSymbol = document.createElement('span');
        atSymbol.classList.add('at-symbol');
        atSymbol.textContent = '@';
        const username = document.createElement('span');
        username.textContent = 'Shahir-47';
        gitHubProfileText.appendChild(atSymbol);
        gitHubProfileText.appendChild(username);
        
        gitHubProfile.appendChild(gitHubProfileImg);
        gitHubProfile.appendChild(gitHubProfileText);

        const seperator = document.createElement('p');
        seperator.textContent = '|';

        const gitHubRepo = document.createElement('a');
        gitHubRepo.href = 'https://github.com/Shahir-47/Restaurant-Page';
        gitHubRepo.textContent = 'Source Code';

        footer.appendChild(gitHubProfile);
        footer.appendChild(seperator);
        footer.appendChild(gitHubRepo);

        document.querySelector('div#content').appendChild(footer);
    };

    navigationBar();
    footer();
};

export default pageLoad;