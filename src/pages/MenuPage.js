import picas from "../assets/bigtab.jpg"
import zennyIcon from "../assets/zenny-icon.png"

import '../styles/menu-style.css'

function Menu(){

    //Menu here
    const dishes = [
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
        { name: 'Name', pic: picas,price: 'price' },
    ]
    const main = document.createElement('div');
    main.id = 'main_menu';
    const containerTitle = document.createElement('div');
    const containerDish = document.createElement('div');
    containerDish.id = 'dishes-container'
    main.appendChild(containerTitle);
    main.appendChild(containerDish);
    const title = document.createElement('div');
    title.classList = 'title';
    title.textContent = 'Menu';
    containerTitle.appendChild(title);

    for(let i = 0; i < dishes.length;i++){
        const dish = document.createElement('div');
        dish.classList.add('dish');
        dish.setAttribute = ('id', [i]);

            const pic = document.createElement('img');
            pic.src = dishes[i].pic
            const name = document.createElement('h2');
            name.textContent = dishes[i].name
            const price = document.createElement('div');
            price.classList.add('center')
            const zenny = document.createElement('img')
            zenny.classList.add('z-icon')
            zenny.src = zennyIcon;
            price.textContent = dishes[i].price
            price.appendChild(zenny);

        dish.appendChild(pic)
        dish.appendChild(name)
        dish.appendChild(price)
        containerDish.appendChild(dish);
    }

    content_container.appendChild(main);
    //
    return content;
}

export default Menu