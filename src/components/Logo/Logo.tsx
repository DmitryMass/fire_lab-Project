import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './logo.scss';

type LogoType = {
  path: string;
  modificator: string;
  handleClick?: () => void;
};

const Logo: FC<LogoType> = ({ path, modificator, handleClick }) => {
  return (
    <Link className={modificator} to={path} onClick={handleClick}>
      <span>fire lab</span> <span>reactjs</span>
    </Link>
  );
};

export default Logo;
