import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

import Course from './Course/Course';
import Footer from './PagesComponents/Footer/Footer';

import './App.scss';
const App: FC = () => {
  return (
    <div className='app'>
      <div className='app__container'>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path={'/course'} element={<Course />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
