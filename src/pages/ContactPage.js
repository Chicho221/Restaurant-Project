import Nav from "./Nav";
import Reload from "./Reload"
import Socials from "./Socials"

import '../styles/contact-style.css'

function Contact(){
    Reload();
    Nav();

    //Contact here
    const main = document.createElement('div');
    main.id = 'main_contact';

    content_container.appendChild(main);
    //
    
    Socials();
    return content;
}

export default Contact