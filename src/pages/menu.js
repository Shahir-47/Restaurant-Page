const menu = () => {

    // Menu items
    const menuItems = [
        {
            category: 'Appetizers',
            items: [
                {
                    name: 'Jedi Dumplings',
                    description: 'Steamed dumplings filled with a mix of minced starfruit and Wookiee mushrooms. Served with a tangy Coruscant dipping sauce'
                },
                {
                    name: 'Tatooine Tacos',
                    description: 'Crispy Bantha meat topped with fresh Porg salsa, Tatooine spices, and a touch of Hutt guacamole. Served on warm Endor flatbread'
                },
                {
                    name: 'Naboo Noodle Bowl',
                    description: 'Fragrant broth infused with Gungan spices, loaded with thin rice noodles, and garnished with freshly picked Shili greens'
                },
            ]
        },
        {
            category: 'Main Courses',
            items: [
                {
                    name: 'Millennium Falcon Burger',
                    description: 'Juicy Corellian beef patty topped with Alderaanian cheese, Wookiee bacon, and Tatooine pickles. Served with a side of Dagobah fries'
                },
                {
                    name: 'Bantha Steak',
                    description: 'Grilled Bantha steak marinated in Mustafarian spices, served with roasted Hoth vegetables and a side of Kashyyyk root mash'
                },
                {
                    name: 'Mandalorian Stew',
                    description: 'A hearty mix of Corellian beans, Mandalorian sausages, and fresh Kashyyyk herbs simmered in a flavorful Tatooine broth. Served with crusty Tatooine bread'
                },
            ]
        },
        {
            category: 'Vegetarian Delights',
            items: [
                {
                    name: 'Dagobah Delight Salad',
                    description: 'A mix of crisp greens, Dagobah moss, and Yavin 4 fruits tossed in a refreshing Coruscant vinaigrette. Topped with shaved Alderaanian cheese'  
                },
                {
                    name: 'Hoth Veggie Curry',
                    description: 'A fragrant blend of Hoth vegetables and exotic spices, simmered in a creamy Coruscant coconut curry sauce. Served with steamed Jakku rice'
                },
                {
                    name: 'Wookiee Wrap',
                    description: 'Grilled Portobello mushrooms, roasted Tatooine peppers, and Hoth cheese wrapped in a warm Endor flatbread. Served with a side of Ewok slaw'
                },
            ]
        },
        {
            category: 'Desserts',
            items: [
                {
                    name: 'Death Star Chocolate Mousse',
                    description: 'Decadent dark chocolate mousse shaped like the infamous Death Star, served with a Hoth vanilla ice cream sphere and a sprinkle of edible stardust'
                },
                {
                    name: 'Wookiee Cookie Sundae',
                    description: 'Chewy Wookiee-inspired cookies served with a generous scoop of Kashyyyk caramel ice cream, topped with whipped Naboo cream and a drizzle of Endor chocolate sauce'
                },
                {
                    name: 'Cloud City Cheesecake',
                    description: ' Light and fluffy cloud-shaped cheesecake infused with Bespin blueberries. Served with a delicate Dagobah mint garnish'
                },
            ]
        },
        {
            category: 'Beverages',
            items: ['Lightsaber Lemonade', 'Hoth Chocolate', 'Droid Oil Coffee', 'Wookiee Roar Smoothie', 'Dagobah Green Tea']
        }
        
    ];

    // Create category and their items
    const createMenuItem = (category) => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        const categoryName = document.createElement('h2');
        categoryName.textContent = category.category;
        categoryContainer.appendChild(categoryName);

        const menuBoxContainer = document.createElement('div');
        menuBoxContainer.classList.add('menu-box-container');
        category.items.forEach(item => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');
            const itemName = document.createElement('h3');
            if (category.category !== 'Beverages'){
                itemName.textContent = item.name;
                const itemDescription = document.createElement('p');
                itemDescription.textContent = item.description;
                itemContainer.appendChild(itemName);
                itemContainer.appendChild(itemDescription);
                menuBoxContainer.appendChild(itemContainer);
            } else {
                itemName.textContent = item;
                categoryContainer.classList.add('beverage');
                itemContainer.appendChild(itemName);
                menuBoxContainer.appendChild(itemContainer);
            }
        });
        
        categoryContainer.appendChild(menuBoxContainer);
        menu.appendChild(categoryContainer);
    };

    // Create menu container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const header = document.createElement('h1');
    header.textContent = 'Galactic Cantina Menu';
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Create menu items
    menuItems.forEach(category => {
        createMenuItem(category);
    });

    // Append menu container to content
    menuContainer.appendChild(header);
    menuContainer.appendChild(menu);

    // Add menu container to content
    document.querySelector('#content').appendChild(menuContainer);
};

export default menu;