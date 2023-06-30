const FAQ = () => {

    const QAndA = {
        'What is the Galactic Cantina?': [`The Galactic Cantina is a premier 
        dining establishment that offers a unique and immersive culinary experience 
        inspired by the vast and diverse galaxies. We combine the finest ingredients 
        from across the universe to create extraordinary dishes that satisfy even the 
        most discerning palates.`],

        'What type of cuisine does the Galactic Cantina serve?': [`Our menu features a 
        fusion of intergalactic flavors, blending traditional recipes with innovative techniques. 
        From exotic alien delicacies to familiar comfort food with a cosmic twist, our 
        culinary team is dedicated to delivering unforgettable gastronomic adventures.`],

        'Do you cater to dietary restrictions and allergies?': [`Absolutely! We understand the importance 
        of accommodating various dietary needs. Our menu includes vegetarian, vegan, gluten-free, and 
        allergy-friendly options. Please inform your server about any specific dietary requirements, and 
        we will strive to provide suitable alternatives.`],

        'Are there options for private events or parties?': [`Absolutely! We offer private event spaces and 
        customizable menus for special occasions, celebrations, corporate gatherings, and more. Our dedicated 
        event planning team will work closely with you to create a personalized experience that exceeds your 
        expectations.`],

        'What are the operating hours of the Galactic Cantina?' : [`
        Our regular operating hours are as follows:`, `Sunday - Thursday: 9:00 am - 12:00 am`, 
        `Friday - Saturday: 10:00 am - 3:00 am`],

        'Are the operating hours and address subject to change' : [`Yes, please note that operating hours and address 
        information may be subject to change. We recommend checking our website or contacting us directly for the 
        most up-to-date information`],

        'Where is the Galactic Cantina located?' : [`Our restaurant is situated at:`, `Hyperlane Avenue`,
        `Galactic City, Galactic Republic 10000`, `Coruscant, Corellia, Corellian System`, 
        `Coordinates: 284.567, -12.345`],

        'What are the contact details of the Galactic Cantina?' : [`You can reach us through the following contact 
        information:`, `Phone: 530-716-9062`, `Tel: 530-716-9062`, `Fax: 530-716-9062`]
        
    }

    const FAQcontainer = document.createElement('div');
    FAQcontainer.classList.add('FAQ-container');

    const header = document.createElement('h1');
    header.textContent = 'Frequently Asked Questions (FAQ)';
    FAQcontainer.appendChild(header);

    const FAQquestions = document.createElement('ol');
    FAQquestions.classList.add('FAQ-questions');


    for (let i=0 ; i < Object.keys(QAndA).length; i++){
        const FAQquestion = document.createElement('li');
        FAQquestion.textContent = Object.keys(QAndA)[i];

        const FAQanswer = document.createElement('p');
        FAQanswer.textContent = QAndA[Object.keys(QAndA)[i]][0];

        if (QAndA[Object.keys(QAndA)[i]].length > 1){
            const unorderedList = document.createElement('ul');
            for (let j=1; j < QAndA[Object.keys(QAndA)[i]].length; j++){
                const item = document.createElement('li');
                item.textContent = QAndA[Object.keys(QAndA)[i]][j];
                unorderedList.appendChild(item);
            }
            FAQanswer.appendChild(unorderedList);
        }

        FAQquestion.appendChild(FAQanswer);
        FAQquestions.appendChild(FAQquestion);
    }

    FAQcontainer.appendChild(FAQquestions);

    document.querySelector('#content').appendChild(FAQcontainer);

}

export default FAQ;