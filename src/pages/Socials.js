import MusicIcon from '../assets/Music.png';
import DiscordIcon from '../assets/Discord.png';
import InstaIcon from '../assets/Instagram.png';
import GitHubIcon from '../assets/GitHub.png';
import TwitterIcon from '../assets/TwitterX.png';
import '../styles/social-style.css'

function SideIcons () {
    console.log('Socials work')
    const content = document.getElementById('content');
    const iconsArr = [
        {
            name: 'Music',
            path: MusicIcon,
            link: ' ',
        },
        {
            name: '',
            path: '',
            link: '',
        },
        {
            name: 'Discord',
            path: DiscordIcon,
            link: ' ',
        },
        {
            name: 'Instagram',
            path: InstaIcon,
            link: ' ',
        },
        {
            name: 'GitHub',
            path: GitHubIcon,
            link: ' ',
        },
        {
            name: 'Twitter',
            path: TwitterIcon,
            link: ' ',
        },
        
    ]

    const socials = document.createElement('div')
        socials.id = 'socials-container';
    for(let i = 0;i < iconsArr.length; i++){
        const socialSquere = document.createElement('button');
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
    content.appendChild(socials)
    return content;
}

export default SideIcons;