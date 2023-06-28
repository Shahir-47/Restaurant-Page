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
import kenobi from './img/kenobi.jpeg';
import general from './img/general.jpg';
import jar from './img/jar.jpeg';
import dooku from './img/dooku.png';
import jinn from './img/jinn.jpg';
import mace from './img/mace.jpeg';
import maul from './img/maul.jpg';
import ahsoka from './img/ahsoka.jpg';
import yoda from './img/yoda.jpg';
import tarkin from './img/tarkin.jpg';
import hutt from './img/hutt.jpg';
import han from './img/han.jpg';
import chew from './img/chew.jpg';
import c3po from './img/c3po.png';
import r2d2 from './img/r2d2.jpg';

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

    let currentIndex = 0;

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
            link: 'https://www.starwars.com/databank/emperor-palpatine-darth-sidious',
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
        },
        {
            name: 'General Grievous',
            image: general,  
            review: "Ah, the Galactic Cantina! A most impressive culinary establishment, if I do say so myself. As a connoisseur of fine dining and a collector of lightsabers, I found myself drawn to the eclectic flavors and the inviting atmosphere. The Galactic Cantina truly knows how to cater to those who appreciate the finer things in life. With each bite, I could feel the power of the Force coursing through me, igniting a hunger that only the Cantina's delectable offerings could satisfy. 'It's a trap!' I warned myself, as I sampled their delectable dishes. But to my delight, there was no trap, only a symphony of tastes that would make any droid rejoice. 'Oh, I don't think so!' I exclaimed as I savored their Youngling Slushies. The Cantina's diverse menu, like my collection of lightsabers, offers something for every palate. So, whether you're a Jedi, a Sith, or a general seeking a moment of respite from the battlefield, the Galactic Cantina is a haven where you can indulge in gastronomic pleasures fit for a cyborg of my stature. 'I will deal with this Jedi slime myself!' I declared, referring to the delectable dishes that awaited me. So, grab your blaster and join me for an epic feast at the Galactic Cantina. 'It is time to abandon this hopeless cause and surrender to the flavors!'",
            link: 'https://www.starwars.com/databank/general-grievous',
        },
        {
            name: 'Darth Jar Jar Binks',
            image: jar,
            review: "Mesa gotta tell you, the Galactic Cantina is bombad! It's a place where even clumsy Gungans like mesa can find culinary paradise! Yousa gonna have a yummy tum-tum time! The Cantina's menu is like a big 'ol pot of tasty soup, with flavors from all over the galaxy mixin' together. Mesa tongue's gonna do the happy dance! Mesa recommend tryin' the Gungan Gumbo, it's a real bombad dish! From the first bite, mesa felt like mesa was doin' a bongo dance in my mouth! Mesa thinks mesa in love with the Cantina's food! So, whether yousa a Jedi Knight, a Sith Lord, or just a hungry traveler, the Galactic Cantina has somethin' to satisfy all taste buds! Mesa promise, yousa gonna smile big! Mesa even heard theysa got a drink called the Jar Jar Juice—mesa feels honored! Mesa very humbled! The Cantina's got such a lively atmosphere, with alien decorations and music that makes you wanna bongo your ears off! Mesa can't stop groovin'! Mesa says, Come on over and join the party, because in the Cantina, everybodysa got a place to belong! Yousa gonna have a bombad time!",
            link: 'https://www.starwars.com/databank/jar-jar-binks',
        },
        {
            name: 'Count Dooku',
            image: dooku,
            review: "Ah, the Galactic Cantina, a haven for those seeking refinement and sophistication in their dining experience. As a man of taste and elegance, I must say that the Cantina exceeded my expectations. From the moment I walked in, I sensed an aura of culinary excellence. The ambiance, much like my lightsaber, exuded an elegant glow that set the stage for an unforgettable gastronomic journey. 'I've been looking forward to this' culinary delight. The menu, curated with the precision of a Sith Lord's plotting, offers an array of delectable dishes that rival the finest delicacies in the galaxy. 'Ah, yes, the negotiator,' I thought as I sampled their masterfully crafted creations. Each bite was a symphony of flavors, leaving me to exclaim, 'Impressive. Most impressive.' The Galactic Cantina understands that culinary artistry is a delicate dance, blending ingredients with the grace of a master duelist. So, whether you're a Jedi or a Sith, a droid or a politician, the Cantina's offerings will surely satisfy even the most discerning palate. 'Good. Twice the pride, double the flavor.' So, allow yourself to be seduced by the culinary dark side, and join me at the Galactic Cantina for an epicurean experience fit for a Sith Lord. 'The Force is strong with their menu.'",
            link: 'https://www.starwars.com/databank/count-dooku',
        },
        {
            name: 'Qui-Gon Jinn',
            image: jinn,
            review: "Greetings, fellow gastronomes! The Galactic Cantina beckons like the Force itself, guiding us to a culinary adventure beyond the ordinary. As a Jedi Master and seeker of balance, I must say that the Cantina embodies the harmonious fusion of flavors. 'The ability to taste the Force' is strong here, my friends. From the moment I entered, I felt a wave of gastronomic enlightenment wash over me. 'There's always a bigger meal,' I thought, as I perused their diverse menu. The Cantina's dishes, like a well-crafted lightsaber, are a balance of flavors and textures. Each bite transports you to a galaxy far, far away. 'The Force will be with you, always,' they say, and indeed, it is with every delectable morsel. Whether you're a Jedi, a Sith, or simply a seeker of culinary delights, the Galactic Cantina offers an experience that transcends the ordinary. 'Your focus determines your flavor,' so be prepared to immerse yourself in a gastronomic journey unlike any other. 'I have a bad feeling about this,' you say? Fear not, for the Cantina's delectable creations will banish any doubts and leave you craving more. So, trust in the Force of flavor and join me on this epicurean adventure at the Galactic Cantina. 'May the forks be with you.'",
            link: 'https://www.starwars.com/databank/qui-gon-jinn',
        },
        {
            name: 'Mace Windu',
            image: mace,
            review: "At the Galactic Cantina, the force of flavor is strong. As a Jedi Master, I must say that this culinary haven impressed even my discerning palate. 'This party's over!' for bland and ordinary meals. The Cantina's menu is a lightsaber of taste, igniting a gustatory explosion that rivals the power of the Force. From the first bite, I could sense the harmonious balance of flavors, a true testament to their culinary mastery. 'I sense a great meal in you.' With each dish, the Cantina transports you to distant planets, immersing you in the rich tapestry of galactic cuisine. 'I'm going to end this meal, once and for all,' I declared, fully surrendering to the indulgence. The Cantina's creations are a true force to be reckoned with, enticing even the most stoic Jedi to abandon their dietary restrictions. 'There is no try, only eat!' So, whether you're a Jedi Knight, a Sith Lord, or just a humble food enthusiast, the Galactic Cantina is where you'll find culinary enlightenment. 'Take a seat, young Skywalker,' and savor the dishes that await. Trust in the Cantina's culinary prowess, and you'll find yourself uttering the words, 'This is where the fun begins.' Join me on this flavor-filled journey, and together, we'll bring balance to your taste buds. 'May the forks be with you!'",
            link: 'https://www.starwars.com/databank/mace-windu',
        },
        {
            name: 'Darth Maul',
            image: maul,
            review: "Prepare for a culinary experience that will ignite your taste buds and leave you craving more! The Galactic Cantina, much like the dark side, is seductive and full of flavor. From the moment I stepped foot in this gastronomic sanctuary, I knew I had found my true calling. 'At last, we will reveal ourselves to the foodies. At last, we will have flavor.' The Cantina's menu is a symphony of deliciousness, offering a variety of dishes that will satisfy even the most insatiable appetite. Each bite is a dance of savory sensations, reminiscent of the battles I once fought. 'Fear is the path to the dark side. Fear of blandness, that is.' The Cantina's chefs have mastered the art of culinary combat, infusing their creations with the power of the Force. 'Prepare to taste the wrath of the Sith!' From exotic spices to daring flavor combinations, the Cantina takes your palate on a journey to the edge of the galaxy and back. 'At last, we will feast as we should have!' So, whether you're a Jedi, a Sith, or simply a lover of bold flavors, the Galactic Cantina is where you'll find true culinary mastery. 'Join me, and together we will savor the delectable delights of the dark side. We shall dine like never before.' Embrace the allure of the Cantina and surrender to the power of its tantalizing menu. 'The galaxy will taste our hunger!' May the forks be with you!",
            link: 'https://www.starwars.com/databank/darth-maul',
        },
        {
            name: 'Ahsoka Tano',
            image: ahsoka,
            review: "The Galactic Cantina is more than just a place to satisfy your hunger—it's a culinary adventure that'll awaken the Force within your taste buds! From the moment I walked through the doors, I felt an energy, a vibrant pulse that drew me in. 'Snips' they called me, but the Cantina's dishes were anything but small. Each bite was a burst of flavor, a taste sensation that defied expectation. 'I'm no Jedi, but I know good food when I eat it!' The Cantina's menu is a celebration of diversity, just like the galaxy itself. From savory to sweet, from spicy to mild, there's something for everyone. 'May the forks be with you!' Whether you're a loyal Jedi, a mischievous smuggler, or a hungry traveler, the Cantina's culinary delights will leave you yearning for more. 'We have to keep our wits about us. Trust in the Cantina's menu, we must!' So, grab a seat, indulge in the galactic flavors, and let your taste buds embark on a journey through the stars. 'I am no Jedi, but I am a foodie, and this is where the fun begins.' The Galactic Cantina—where delicious memories are made, and the Force of flavor guides you to culinary bliss. 'Snips out!'",
            link: 'https://www.starwars.com/databank/ahsoka-tano',
        },
        {
            name: 'Yoda',
            image: yoda,
            review: "Ah, Galactic Cantina! Culinary wonders it holds. A foodie's paradise, it is. Taste buds tingling, they will be. Delicious, the dishes are. Savor the flavors, you must. Dagobah Delights, a must-try they are. Immersed in galactic culture, you shall be. Music of the taste buds, it is. Shared passion and culinary wisdom, you will find. Mindful of the Force within your plate, be. Venture to the Cantina, you should. May the forks be with you, hmm!",
            link: 'https://www.starwars.com/databank/yoda',
        },
        {
            name: 'Grand Moff Tarkin',
            image: tarkin,
            review: 'Attention, diners! Grand Moff Tarkin here, presenting a review of the Galactic Cantina. Prepare for an experience of imperial proportions! This Cantina is unlike any other, boasting flavors that command attention and satisfaction. "You may indulge when ready!" Every dish is meticulously crafted, a testament to culinary precision and mastery.',
            link: 'https://www.starwars.com/databank/grand-moff-tarkin',
        },
        {
            name: 'Jabba the Hutt',
            image: hutt,
            review: "Mmm, Galactic Cantina, a feast fit for Jabba! Delicious delights, they serve. Savor the flavors, you will. Exotic dishes, a treat for every appetite. Jabba's taste buds dance with joy! Atmosphere, lively and vibrant. Like the bustling streets of Tatooine, the Cantina buzzes with energy. Music, a rhythmic invitation to indulge. Jabba's tail can't help but sway! Friendly staff, attentive to every need. Service, as smooth as Huttese negotiation. A dining experience that leaves Jabba satisfied. Bring your friends, bring your appetite. In the Cantina, there's room for all. Bon appétit, my friends!",
            link: 'https://www.starwars.com/databank/jabba-the-hutt',
        },
        {
            name: 'Han Solo',
            image: han,
            review: "Alright, listen up! The Galactic Cantina, it's the real deal. If you're looking for a place to unwind and satisfy your taste buds, this is it. The atmosphere, it's got that cool vibe that makes you feel right at home. The menu? Well, let me tell you, it's a starship full of flavors from every corner of the galaxy. From the moment you take that first bite, you know you've hit the jackpot.\n\nThe staff? They're like the smoothest pilots in the galaxy. Quick on their feet, always there when you need 'em. You won't find a better crew anywhere else. And hey, if you're lucky, you might even run into some familiar faces from the Outer Rim.\n\nNow, let's talk drinks. The Cantina knows how to mix 'em. From the classic Corellian ale to some exotic concoctions, they've got you covered. Take a sip, kick back, and let the flavors transport you to a whole new world.\n\nSo, whether you're a scoundrel like me or just a hungry traveler, the Galactic Cantina is the place to be. Trust me, you won't be disappointed. It's got that special something that keeps you coming back for more. May the Force be with you, and the taste buds too!",
            link: 'https://www.starwars.com/databank/han-solo',
        },
        {
            name: 'Chewbacca',
            image: chew,
            review: "Grrrrrrrrrrrrrrr! Hnnnngggggg! Aaaaaaaarrrrrggghhhh!",
            link: 'https://www.starwars.com/databank/chewbacca',
        },
        {
            name: 'C-3PO',
            image: c3po,
            review: "Oh, my circuits! The Galactic Cantina, what a delightful establishment! It's a haven of elegance and refinement, a place where one can appreciate the finer things in life. And yet, amidst the impeccable ambiance, there's always that incessant beeping and whirring of a certain astromech droid that shall remain nameless. R2-D2, I dare say, seems to lack proper etiquette and decorum. Oh, the countless times I've had to endure his impulsive antics and inconvenient interruptions. However, I must admit, the Cantina's menu is simply marvelous, offering a wide range of delectable options to satisfy even the most discerning palates. But let us not forget the most important aspect: the impeccable service provided by the Cantina's staff. They handle the challenges posed by R2-D2's unpredictable behavior with impressive poise and patience. In summary, the Galactic Cantina is a delightful destination, despite the occasional robotic nuisance. It's a place to indulge in the finest culinary delights, all while hoping that R2-D2 doesn't electrocute himself with a malfunctioning drink dispenser... again",
            link: 'https://www.starwars.com/databank/c-3po',
        },
        {
            name: 'R2-D2',
            image: r2d2,
            review: "***  Unfortunately, it seems that R2-D2's comment had to be removed for utilizing a rather colorful language. As much as we appreciate the droid's enthusiasm and unique way of expressing thoughts, we strive to maintain a family-friendly environment here at the Galactic Cantina. We encourage R2-D2 and all our guests to keep the conversations pleasant and suitable for all ages. Thank you for understanding, and may the beeps and boops of joy continue to resonate through our cantina!  ***",
            link: 'https://www.starwars.com/databank/r2-d2',
        }
    ];

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

        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');
    
        const backButton = document.createElement('img');
        backButton.classList.add('back-button');
        backButton.src = Back;
        backButton.alt = 'Back review button';
        backButton.classList.add('disabled-btn');

        reviewsCards.appendChild(backButton);

        for (let i = 0; i < cardData.length; i++) {
            const card = createReviewCard(cardData[i]);
            cardWrapper.appendChild(card);
        }

        reviewsCards.appendChild(cardWrapper);
        reviewsCards.appendChild(nextButton);
    
        const content = document.querySelector('div#content');
        reviews.appendChild(reviewsText);
        reviews.appendChild(reviewsCards);
        content.appendChild(reviews);

    }

    const switchCards = () => {
        const cardsWrapper = document.querySelector('.card-wrapper');
        const cardWidth = cardsWrapper.getBoundingClientRect().width + 32;
        console.log(cardWidth);
        const backButton = document.querySelector('.back-button');
        const nextButton = document.querySelector('.next-button');

        const enableButtons = () => {
            if (currentIndex === 0) {
                backButton.classList.remove("switch-button");
                backButton.classList.add("disabled-btn");
            } else if (currentIndex === cardData.length - 1) {
                nextButton.classList.remove("switch-button");
                nextButton.classList.add("disabled-btn");
            } else {
                backButton.classList.remove("disabled-btn");
                nextButton.classList.remove("disabled-btn");
                backButton.classList.add("switch-button");
                nextButton.classList.add("switch-button");
            }
        };

        const scrollLeft = () => {
            if (currentIndex > 0) {
                currentIndex--;
                enableButtons();
                cardsWrapper.scrollBy(-cardWidth, 0);
            } else {
                enableButtons();
            }
        };
    
        const scrollRight = () => {
          if (currentIndex < cardData.length - 1) {
                currentIndex++;
                enableButtons();
                cardsWrapper.scrollBy(cardWidth, 0);
          } else {
                enableButtons();
          }
        };

    
        backButton.addEventListener('click', scrollLeft);
        nextButton.addEventListener('click', scrollRight);
    };
    

    // const switchCards = () => {
    //     //Event listeners for next and previous buttons
    //     const cardsWrapper = document.querySelector('.card-wrapper');
    //     let wrapperWidth = cardsWrapper.offsetWidth;

    //     // Add event listeners for next and previous buttons
    //     const nextButton = document.querySelector('.next-button');
    //     nextButton.addEventListener('click', () => {
    //         wrapperWidth = -wrapperWidth;
    //         cardsWrapper.classList.add('card-scroll')
    //         // cardsWrapper.style.transform = `translateX(${wrapperWidth}px)`
    //         // cardsWrapper.classList.add('card-wrapper')
    //     });

    //     // backButton.addEventListener('click', () => {
    //     //     if (currentCardIndex > 0) {
    //     //     currentCardIndex--;
    //     //     updateDisplayedReview();
    //     //     }
    //     // });

    //     // Helper function to update the displayed review
    //     // const updateDisplayedReview = () => {
    //     //     const currentCard = reviewsCards.querySelector('.card');
    //     //     const newCard = createReviewCard(cardData[currentCardIndex]);
    //     //     reviewsCards.replaceChild(newCard, currentCard);
    //     // };

    //     // const autoRotation = setInterval(() => {
    //     //     if (currentCardIndex < cardData.length - 1) {
    //     //       currentCardIndex++;
    //     //     } else {
    //     //       currentCardIndex = 0;
    //     //     }
    //     //     updateDisplayedReview();
    //     // }, 5000);
    //     }
      
    // Display the first review and setup a container for the review cards
    reviewBox();
    // Event listeners for next and previous buttons
    switchCards();
}



export { navigationBar, intro, overview, reviews};