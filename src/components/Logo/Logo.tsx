import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './logo.scss';

type LogoType = {
  path: string;
  modificator: string;
};

const Logo: FC<LogoType> = ({ path, modificator }) => {
  return (
    <Link className={modificator} to={path}>
      <span>fire lab</span> <span>reactjs</span>
    </Link>
  );
};

export default Logo;
