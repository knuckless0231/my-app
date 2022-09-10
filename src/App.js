import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import s from './components/ContentCSSModule/Content.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile.jsx';
import News from './components/News/News.jsx'; 
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx' ;



const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className={s.content}>
          <Routes>
          <Route path = "/profile/profile.jsx" element= {<Profile />} />
          <Route path = "/dialogs/dialogs.jsx" element= {<Dialogs />} />
          <Route path = "/news/news.jsx/" element = {<News />} />
          <Route path = "/music/music.jsx" element = {<Music />} />
          <Route path = "/settings/settings.jsx" element = {<Settings />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    );
}

export default App;