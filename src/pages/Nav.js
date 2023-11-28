import '../styles/nav-style.css'
import Listeners from '../functions/listeners.js';
import HomePage from '../pages/HomePage.js'
import XImage from '../assets/X.png'

function Nav() {
    const content = document.getElementById('content');

    //Button for opening bar
    const menuButton = document.createElement('button');
    menuButton.id = 'menu';
    for(let i = 0;i < 3; i++){
        const line = document.createElement('div');
        line.classList.add('menu-line');

        menuButton.appendChild(line);
    }
    content.appendChild(menuButton);

    //Nav bar from left
    const navArr = [
        {
            name: 'Home',
        },
        {
            name: 'Menu',
        },
        {
            name: 'Contact',
        },
    ]
    const NavBar = document.createElement('div');
    NavBar.id = 'nav-bar';
    NavBar.style.display = 'none';
    /* NavBar.setAttribute('status','0'); */
        const X = document.createElement('img');
        X.src = XImage
        NavBar.appendChild(X);

        const navOptions = document.createElement('div');
        navOptions.id = 'nav-container';
            for(let i = 0;i < navArr.length;i++){
                const navOption = document.createElement('button')
                navOption.textContent = navArr[i].name;
                navOption.setAttribute('id', 'nav'+i);
                navOptions.appendChild(navOption);
            }
        NavBar.appendChild(navOptions);
    // Show/Hide nav bar
    const ChangeStatus = () =>{
        let status = NavBar.style.display
            if(status == 'none'){
                NavBar.style.display = 'flex'
            }if(status == 'flex'){
                NavBar.style.display = 'none'
            }
    }
    X.addEventListener('click', ChangeStatus)
    menuButton.addEventListener('click', ChangeStatus)
    content.appendChild(NavBar);
    Listeners();
}

export default Nav;