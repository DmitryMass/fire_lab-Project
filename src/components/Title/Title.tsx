import React, { FC } from 'react';
import './title.scss';

type ITitle = {
  children: React.ReactNode | string;
  tag?: string | React.ReactNode | any;
  modificator: string;
};

const Title: FC<ITitle> = ({ children, tag, modificator }) => {
  const Tag = tag || 'h1';
  return <Tag className={modificator}>{children}</Tag>;
};

export default Title;
