import DiscordIcon from '../assets/Discord.png';
import InstaIcon from '../assets/Instagram.png';
import GitHubIcon from '../assets/GitHub.png';
import TwitterIcon from '../assets/TwitterX.png';
import '../styles/social-style.css'

function SideIcons () {
    console.log('Socials work')
    const content_container = document.getElementById('content_container');
    const iconsArr = [
 
        {
            name: 'Discord',
            path: DiscordIcon,
            link: '#',
        },
        {
            name: 'Instagram',
            path: InstaIcon,
            link: '#',
        },
        {
            name: 'GitHub',
            path: GitHubIcon,
            link: 'https://github.com/Chicho221',
        },
        {
            name: 'Twitter',
            path: TwitterIcon,
            link: '#',
        },
        
    ]

    const socials = document.createElement('div')
        socials.id = 'socials-container';
    for(let i = 0;i < iconsArr.length; i++){
        const socialSquere = document.createElement('a');
            socialSquere.href = iconsArr[i].link;
            socialSquere.target = '_blank'
            const icon = document.createElement('img')
            if(iconsArr[i].path == ''){
                socialSquere.style.backgroundColor = 'transparent';
                socialSquere.style.border = 'none';
            }
            icon.src = iconsArr[i].path;
            socialSquere.appendChild(icon)
        socialSquere.classList.add('social-squere');

        socials.appendChild(socialSquere);
    }
    content_container.appendChild(socials)
    return content_container;
}

export default SideIcons;