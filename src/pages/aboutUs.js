const aboutUs = () => {
    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.classList.add('about-us-container');

    const header = document.createElement('h1');
    header.textContent = 'About Us';

    const aboutUsText1 = document.createElement('p');
    aboutUsText1.textContent =  `Welcome to the Galactic Cantina, 
    your gateway to culinary adventures in a galaxy far, far away. Situated 
    in the bustling metropolis of Coruscant City, our restaurant is a haven 
    for food enthusiasts, adventurers, and curious souls seeking to indulge 
    their palates in a truly out-of-this-world experience.`;

    const aboutUsText2 = document.createElement('p');
    aboutUsText2.textContent = `At the Galactic Cantina, we are passionate about 
    blending the finest ingredients from across the galaxy to create extraordinary 
    flavors that transport you to new gastronomic dimensions. Our skilled chefs combine 
    traditional cooking techniques with innovative culinary concepts, resulting in 
    a menu that celebrates the diversity and richness of intergalactic cuisine.`;

    const aboutUsText3 = document.createElement('p');
    aboutUsText3.textContent = `Step into our beautifully designed space, inspired by the 
    cosmos itself, where sleek lines and futuristic accents merge seamlessly with warm and 
    inviting atmospheres. Whether you're seeking an intimate dinner for two or a lively 
    gathering with friends, our restaurant offers a range of seating options to suit your 
    preferences.`;

    const aboutUsText4 = document.createElement('p');
    aboutUsText4.textContent = `We take great pride in providing exceptional service to our guests. 
    Our friendly and knowledgeable staff are eager to guide you through our menu, offering 
    recommendations and ensuring that your dining experience is nothing short of stellar. We 
    strive to create a welcoming and inclusive environment where everyone feels valued and cared for.`;

    const aboutUsText5 = document.createElement('p');
    aboutUsText5.textContent = `At the Galactic Cantina, we believe in the power of food to bring people 
    together, to spark conversations, and to create memories that transcend time and space. We are 
    committed to sourcing ingredients ethically and sustainably, supporting local farmers and producers 
    whenever possible. Our dedication to quality extends to every aspect of our operation, from the careful 
    selection of ingredients to the artful presentation of each dish.`;

    const aboutUsText6 = document.createElement('p');
    aboutUsText6.textContent = `Whether you're savoring our signature dishes like Nebula Noodles or indulging 
    in our delectable dessert creations, every bite at the Galactic Cantina is an invitation to embark on a 
    culinary journey like no other. Join us as we explore the vast reaches of flavor and imagination, and 
    let us transport you to a universe of taste sensations that will leave you longing for your next visit.`;

    const aboutUsText7 = document.createElement('p');
    aboutUsText7.textContent = `Welcome to the Galactic Cantina, where gastronomy meets the cosmos. May your 
    taste buds be forever tantalized and your culinary adventures know no bounds.`;

    aboutUsContainer.appendChild(header);
    aboutUsContainer.appendChild(aboutUsText1);
    aboutUsContainer.appendChild(aboutUsText2);
    aboutUsContainer.appendChild(aboutUsText3);
    aboutUsContainer.appendChild(aboutUsText4);
    aboutUsContainer.appendChild(aboutUsText5);
    aboutUsContainer.appendChild(aboutUsText6);
    aboutUsContainer.appendChild(aboutUsText7);

    document.querySelector('#content').appendChild(aboutUsContainer);
}

export default aboutUs;