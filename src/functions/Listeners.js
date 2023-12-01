import HomePage from '../pages/HomePage.js';
import MenuPage from '../pages/MenuPage.js';
import ContactPage from '../pages/ContactPage.js';

//Button Listeners
function Listeners() {
    const home = document.getElementById('nav0');
    home.addEventListener('click', HomePage)
    const menu = document.getElementById('nav1');
    menu.addEventListener('click', MenuPage)
    const contact = document.getElementById('nav2');
    contact.addEventListener('click', ContactPage)
};

export default Listeners;

