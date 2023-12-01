import HomePage from './pages/HomePage.js';
import Nav from './pages/Nav.js';
import Reload from './pages/Reload.js';
import Socials from './pages/Socials.js';

import './style.css';

//First load
Reload();
Nav()
document.body.appendChild(HomePage());
Socials();
