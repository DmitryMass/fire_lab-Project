import React, { FC } from 'react';
import HomeForm from '../../components/PagesDescription/HomeDesc/HomeForm';
import HomeInfo from '../../components/PagesDescription/HomeDesc/HomeInfo';

import screen from '../../assets/icons/group.svg';
import reactIcon from '../../assets/icons/react-icon.svg';
import './home.scss';

const Home: FC = () => {
  return (
    <div className='home'>
      <div className='home__react'>
        <object data={reactIcon} type='' aria-label='obj' />
      </div>
      <div className='container'>
        <div className='home__header'>
          <HomeInfo />
          <HomeForm />
        </div>
        <div className='home__pictures'>
          <object data={screen} type='' aria-label='screen' />
        </div>
      </div>
    </div>
  );
};

export default Home;
