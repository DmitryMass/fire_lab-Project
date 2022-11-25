import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

import Course from '../pages/Course/Course';
import Footer from './PagesComponents/Footer/Footer';

import useTypedSelector from '../store/hooks/useTypedSelector';

import './App.scss';

const App: FC = () => {
  const { user } = useTypedSelector((state) => state.user);
  return (
    <div className='app'>
      <div className='app__container'>
        <Routes>
          <Route
            path='/'
            element={user ? <Navigate to={'/course'} /> : <Home />}
          />
          <Route path='/course' element={user ? <Course /> : <Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
