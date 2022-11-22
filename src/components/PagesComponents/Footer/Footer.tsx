import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import MyLogo from '../../Logo/MyLogo/MyLogo';
import './footer.scss';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__logo'>
          <MyLogo />
          <p className='footer__rights'>Jimmy-Co - All rights reserved</p>
        </div>
        <div>
          <Link to={'/'} className='footer__rights'>
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
