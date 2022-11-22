import React, { FC } from 'react';
import Logo from '../../Logo/Logo';
import Title from '../../Title/Title';

import '../../../pages/Home/home.scss';

const HomeInfo: FC = () => {
  return (
    <div className='home__info'>
      <Logo path='/' modificator='logo__home' />
      <Title modificator='home__title'>
        Build a complete app <span className='home__span'>from scratch</span>{' '}
        with <span className='home__span'>React JS</span>
      </Title>
      <p className='home__subtitle'>
        In just one week you will master in practice one of the most used and
        highly demanded technologies to access the best opportunities on the
        market.
      </p>
    </div>
  );
};

export default HomeInfo;
