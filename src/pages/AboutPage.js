import '../styles/about-style.css'

function About(){
    const main = document.createElement('div');
    main.id = 'main_about';
        const aboutContent = document.createElement('div')
        const aboutContentTitle = document.createElement('h1')
            aboutContentTitle.textContent = "About Us"
            aboutContent.appendChild(aboutContentTitle);
            const aboutContentInfo = document.createElement('div')
            aboutContentInfo.textContent = 'About us goes here!';
            aboutContent.appendChild(aboutContentInfo)
        aboutContent.id = 'about-content';
        const aboutContact = document.createElement('div')
        const aboutContactTitle = document.createElement('h1')
            aboutContactTitle.textContent = "Contact"
            aboutContact.appendChild(aboutContactTitle);
            const aboutContactInfo = document.createElement('div')
            aboutContactInfo.textContent = 'Contact info goes here!';
            aboutContact.appendChild(aboutContactInfo)
        aboutContact.id = 'about-contact';
        const aboutLocation = document.createElement('div')
            const aboutLocationTitle = document.createElement('h1')
            aboutLocationTitle.textContent = "Location"
            aboutLocation.appendChild(aboutLocationTitle);
            const aboutLocationInfo = document.createElement('div')
            aboutLocationInfo.textContent = 'Location info goes here';
            aboutLocation.appendChild(aboutLocationInfo)
        aboutLocation.id = 'about-location';

        main.appendChild(aboutContent)
        main.appendChild(aboutContact)
        main.appendChild(aboutLocation)
    content_container.appendChild(main);
    //
    return content;
}

export default About