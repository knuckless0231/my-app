import React from 'react';
import s from './Navbar.module.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item }>
            <Link to ='./Profile/Profile.jsx' >Profile</Link>
        </div>
        <div className={`${s.item}`}>
            <Link to='./Dialogs/Dialogs.jsx'>Messages</Link>
        </div>
        <div className={s.item}>
           <Link to = './news/news.jsx'>News</Link>
        </div>
        <div className={s.item}>
           <Link to = './music/music.jsx'>Music</Link>
        </div>
        <div className={s.item}>
           <Link to = './settings/settings.jsx'>Settings</Link> 
        </div>
    </nav>
}

export default Navbar;