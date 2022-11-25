import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './link-button.scss';

interface ILinkButtonProps {
  path: string;
  children: React.ReactNode | string;
  btnStyle: string;
  obj?: React.ReactNode;
}

const LinkButton: FC<ILinkButtonProps> = ({
  path,
  children,
  btnStyle,
  obj,
}) => {
  return (
    <Link className={btnStyle} to={path}>
      {obj} {children}
    </Link>
  );
};

export default LinkButton;
