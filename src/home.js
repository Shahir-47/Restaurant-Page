import Icon from './img/icon.svg';
import IntroPic from './img/img.png';
import Menu from './img/drink.png';
import Yoda from './img/yoda.png';
import Concert from './img/concert.png';
import Anakin from './img/vader5.jpg';
import Vader from './img/vader.jpg';
import Star from './img/star.svg';
import Next from './img/next.svg';
import Back from './img/back.svg';
import Palps from './img/palps.jpg';
import luke from './img/luke.jpeg';
import kenobi from './img/kenobi.jpeg'

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

const reviews = () => {

    let currentCardIndex = 0;

    const starRating = () => {

        const starRating = document.createElement('div');
        starRating.classList.add('star-rating');
        for (let i = 0; i < 5; i++) {
            let star = document.createElement('img');
            star.classList.add('star');
            star.src = Star;
            star.alt = 'Review star';
            starRating.appendChild(star);
        }
        return starRating;
    }


    const createReviewCard = (cardData) => {
        const card = document.createElement('div');
        card.classList.add('card');
      
        const pfpLink = document.createElement('a');
        pfpLink.href = cardData.link;
      
        const cardImg = document.createElement('img');
        cardImg.src = cardData.image;
        cardImg.alt = cardData.name;
      
        pfpLink.appendChild(cardImg);
      
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
      
        const cardText = document.createElement('h3');
        cardText.textContent = cardData.name;
      
        const cardRating = starRating();
      
        const cardDesc = document.createElement('p');
        cardDesc.textContent = cardData.review;
      
        cardContent.appendChild(cardText);
        cardContent.appendChild(cardRating);
        cardContent.appendChild(cardDesc);
      
        card.appendChild(pfpLink);
        card.appendChild(cardContent);
      
        return card;
    };

    const reviewBox = () => {
        const reviews = document.createElement('div');
        reviews.classList.add('reviews');
    
        const reviewsText = document.createElement('h2');
        reviewsText.textContent = 'What our Customers Are Saying';
    
        const reviewsCards = document.createElement('div');
        reviewsCards.classList.add('reviews-cards');
    
        const nextButton = document.createElement('img');
        nextButton.classList.add('next-button');
        nextButton.src = Next;
        nextButton.alt = 'Next review button';
        nextButton.classList.add('switch-button');
    
        const backButton = document.createElement('img');
        backButton.classList.add('back-button');
        backButton.src = Back;
        backButton.alt = 'Back review button';
        backButton.classList.add('switch-button');
        reviewsCards.appendChild(backButton);

        const luke = createReviewCard(cardData[0]);
        const palps = createReviewCard(cardData[1]);
        const anakin = createReviewCard(cardData[2]);
        const vader = createReviewCard(cardData[3]);
        const kenobi = createReviewCard(cardData[4]);
        reviewsCards.appendChild(kenobi);
    
        reviewsCards.appendChild(nextButton);
    
        const content = document.querySelector('div#content');
        reviews.appendChild(reviewsText);
        reviews.appendChild(reviewsCards);
        content.appendChild(reviews);
    }
      
    const cardData = [
        {
            name: 'Luke Skywalker',
            image: luke,
            review: "I never thought I'd find such a wretched hive of scum and flavor. But the Galactic Cantina surprised me in the most delightful way. From the moment I stepped in, I felt the Force of culinary delights calling to me. 'That's not just a snack, that's a feast!' I exclaimed as I sampled their diverse menu. And let me tell you, their Youngling Slushies brought back memories of my training days. 'I am a Jedi, like my father before me, and a foodie too!' I proudly declared. So, whether you're a Jedi, a Sith, or just a hungry traveler, the Galactic Cantina is a destination worth venturing to. 'May the forks be with you!'",
            link: 'https://www.starwars.com/databank/luke-skywalker',
        },
        {
            name: 'Emperor Palpatine',
            image: Palps,
            review: "I must say, the Galactic Cantina has a delightful atmosphere. I felt right at home, surrounded by all those potential Sith apprentices. The Tragedy of Darth Plagueis the Wise always works as a great conversation starter. And when it comes to ordering, I couldn't resist the temptation. With a simple command of 'dew it,' I ventured into the delectable dishes that the Cantina had to offer. Their flavors were as dark and irresistible as the dark side of the Force. I couldn't help but savor every bite, knowing that the pathway to culinary abilities some may consider unnatural lay before me. So, if you dare to explore the depths of galactic flavors and embrace your inner Sith foodie, the Galactic Cantina is where you should be!",
            link: 'https://starwars.fandom.com/wiki/Darth_Sidious',
        },
        {
            name: 'Youngling Slayer 9000',
            image: Anakin,
            review: "I must admit, the Galactic Cantina brought back memories from my Jedi training days. The menu was so tempting, it made me feel like wielding my lightsaber again... but this time, to conquer the delicious dishes! The Youngling Slushies were to die for! Just don't worry, fellow diners, I promise I won't bring my saber to the table. Remember, I have the high ground when it comes to savoring these galactic flavors! So, don't try it, culinary amateurs! You underestimate my power to enjoy every bite!  So, join me, and together we shall feast, bringing peace, justice, and security to our taste buds.",
            link: 'https://www.starwars.com/databank/anakin-skywalker',
        },
        {
            name: 'Darth Vader',
            image: Vader,
            review: "I find your lack of flavor disturbing. But fear not, the Galactic Cantina has proven itself worthy of the dark side's appetite. From the moment I entered, I could sense the power of gastronomic delights calling to me. The Force is strong with their menu, offering a range of dishes that satisfy even the most formidable hunger. And yes, I admit, their Youngling Slushies may be a guilty pleasure. Join me on the culinary journey, for together we shall conquer the taste buds of the galaxy. Remember, there is no dessert, only Sith Lord satisfaction!",
            link: 'https://www.starwars.com/databank/darth-vader',
        },
        {
            name: 'Obi-Wan Kenobi',
            image: kenobi,
            review: "Hello there! If you're seeking a culinary adventure in a galaxy far, far away, look no further than the Galactic Cantina. From the moment I entered, I sensed a culinary force awakening within me. The flavors were as bold as my lightsaber strikes, leaving me to exclaim, 'Another happy meal!' But beware, my friends, for navigating the menu requires wisdom. Remember, 'only a master of flavor' can truly appreciate the nuances of each dish. And when it comes to choosing your seat, always remember the importance of the high ground. The Galactic Cantina offers a 'taste from a higher perspective,' ensuring a dining experience that rises above the rest. Now, as I indulge in these gastronomic delights, I can't help but think of the words I once uttered to my dear friend, 'You're the chosen one! You were my brother, Anakin! I loved you.' Let us embrace the power of food to forge new connections and heal old wounds. 'May the forks be with you,' always",
            link: 'https://www.starwars.com/databank/obi-wan-kenobi',
        }

        
        //Add more card data objects here for additional review cards
    ];

    reviewBox();

}



export { navigationBar, intro, overview, reviews};