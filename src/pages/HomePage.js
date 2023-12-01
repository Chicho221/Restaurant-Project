import logoPath from '../assets/logo.png';
import newsBigPath from '../assets/bigtab.jpg';
import newsSmallOnePath from '../assets/smalltabone.jpg';
import newsSmallTwoPath from '../assets/smalltabtwo.png';
import Nav from "./Nav";
import Reload from "./Reload"
import Socials from "./Socials"

function HomePage() {
    //Reloades page
    Reload();
    //Creates Nav
    Nav();
    
    //Creates main body contents of HomePage
    const main = document.createElement('div');
    main.id = 'main';
        const logo = document.createElement('img');
            logo.classList.add('logo')
            logo.src = logoPath;

        const siteName = document.createElement('div');
            siteName.id = 'site-name';
            siteName.textContent = "Hunter's Inn";

        const lines = document.createElement('div');
            lines.id = 'lines';
        const mainLineOne = document.createElement('div');
            mainLineOne.id = 'line-one';
        const mainLineTwo = document.createElement('div');
            mainLineTwo.id = 'line-two';
        lines.appendChild(mainLineOne)
        lines.appendChild(mainLineTwo)

        const news = document.createElement('div');
            news.id = 'news-container';
            news.textContent = 'News';
        const newsLine = document.createElement('div');
            newsLine.id = 'line-three';
        news.appendChild(newsLine);

        const newsContent = document.createElement('div');
            newsContent.classList.add('news-content');

        const newsBigTab = document.createElement('div');
            newsBigTab.classList.add('news-bigtab');
            newsBigTab.style.backgroundImage = "url('"+ newsBigPath +"')";
        const newsBigText = document.createElement('div');
            newsBigText.classList.add('news-tab-text');
        const textOneh1 = document.createElement('h1');
            textOneh1.textContent = 'Grammewster Chef is back! ';
        const textOneh2 = document.createElement('h2')
            textOneh2.textContent = 'New delicous dishes are available now!';
        newsBigText.appendChild(textOneh1)
        newsBigText.appendChild(textOneh2)

        newsBigTab.appendChild(newsBigText);

        newsContent.appendChild(newsBigTab);

        const newsSmallOne = document.createElement('div');
            newsSmallOne.classList.add('news-smalltab');
            newsSmallOne.style.backgroundImage = "url('"+ newsSmallOnePath +"')";
        const newsSmallTextOne = document.createElement('div');
            newsSmallTextOne.classList.add('news-tab-text');
        const textTwoh1 = document.createElement('h1');
            textTwoh1.textContent = 'New tasty dish coming?!';
        const textTwoh2 = document.createElement('h2')
            textTwoh2.textContent = 'We’ve got a really amazing dish coming for you.';
        newsSmallTextOne.appendChild(textTwoh1)
        newsSmallTextOne.appendChild(textTwoh2)

        newsSmallOne.appendChild(newsSmallTextOne);
        
        const newsSmallTwo = document.createElement('div');
            newsSmallTwo.classList.add('news-smalltab');
            newsSmallTwo.style.backgroundImage = "url('"+ newsSmallTwoPath +"')";
        const newsSmallTextTwo = document.createElement('div');
            newsSmallTextTwo.classList.add('news-tab-text');
        const textThreeh1 = document.createElement('h1');
            textThreeh1.textContent = 'Summer Special is back!';
        const textThreeh2 = document.createElement('h2')
            textThreeh2.innerHTML = "Everyone’s favorite is back for" + "<br />" +" limited time.";
        newsSmallTextTwo.appendChild(textThreeh1)
        newsSmallTextTwo.appendChild(textThreeh2)

        newsSmallTwo.appendChild(newsSmallTextTwo);

        newsContent.appendChild(newsSmallOne);
        newsContent.appendChild(newsSmallTwo);
        news.appendChild(newsContent);

    main.appendChild(logo);
    main.appendChild(siteName);
    main.appendChild(lines);
    main.appendChild(news);

    content_container.appendChild(main);

    //Create Social buttons
    Socials();
    return content;
}

export default HomePage;