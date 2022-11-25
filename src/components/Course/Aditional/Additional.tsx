import React, { FC } from 'react';
import arrow from '../../../assets/icons/arrow-right.svg';

import './additional.scss';

interface IAdditionalProps {
  title: string;
  desc: string;
  link: string;
  obj: string;
}

const Additional: FC<IAdditionalProps> = ({ desc, title, link, obj }) => {
  return (
    <a rel='noreferrer' href={link} target={'_blank'} className='additional'>
      <div className='additional__obj'>
        <object data={obj} type='' aria-label='upload' />
      </div>
      <div className='additional__desc'>
        <div className='desc__wrapper'>
          <h3 className='desc__title'>{title}</h3>
          <p className='desc__desc'>{desc}</p>
        </div>
        <object data={arrow} type='' aria-label='arrow' />
      </div>
    </a>
  );
};

export default Additional;
