import HomePage from '../pages/HomePage.js';
import MenuPage from '../pages/MenuPage.js';
import AboutPage from '../pages/AboutPage.js';
import Socials from '../pages/Socials.js';
import Reload from '../pages/Reload.js';
import Nav from '../pages/Nav.js';

//Button Listeners
function Listeners() {
    const home = document.getElementById('nav0');
    home.addEventListener('click', () =>{
        Reload();
        Nav()
        HomePage();
        Socials();
    })
    const menu = document.getElementById('nav1');
    menu.addEventListener('click', () => {
        Reload();
        Nav()
        HomePage();
        MenuPage();
        Socials();
    })
    const about = document.getElementById('nav2');
    about.addEventListener('click', () => {
        Reload();
        Nav()
        HomePage();
        AboutPage();
        Socials();
    })
};

export default Listeners;

