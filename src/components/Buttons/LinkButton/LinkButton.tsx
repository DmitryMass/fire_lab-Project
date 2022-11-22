import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './link-button.scss';

interface ILinkButtonProps {
  path: string;
  children: React.ReactNode | string;
  style: string;
  obj?: React.ReactNode;
}

const LinkButton: FC<ILinkButtonProps> = ({ path, children, style, obj }) => {
  return (
    <Link className={style} to={path}>
      {obj} {children}
    </Link>
  );
};

export default LinkButton;
