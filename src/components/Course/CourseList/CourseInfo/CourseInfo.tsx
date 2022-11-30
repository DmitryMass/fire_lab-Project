import React, { FC, memo } from 'react';
import { ICourseList } from '../../../../types/courseList';
import LinkButton from '../../../Buttons/LinkButton/LinkButton';

import faceObj from '../../../../assets/icons/smile-logo.svg';
import lightObj from '../../../../assets/icons/lightning.svg';
import Additional from '../../Aditional/Additional';

import objUpload from '../../../../assets/icons/upload.svg';
import objWallpaper from '../../../../assets/icons/wallpaper-icon.svg';

import './course-info.scss';

interface ICourseInfoProps {
  item: ICourseList;
}

const CourseInfo: FC<ICourseInfoProps> = ({ item }) => {
  return (
    <div className='info'>
      <div className='info__item'>
        <div className='item__wrapper'>
          <h3 className='item__title'>{item.title}</h3>
          <p className='item__description'>{item.desc}</p>
          <span>
            {/* Need to add  function complete (request) */}
            <label className='course__checkbox' htmlFor={item.title}>
              <input id={item.title} type='checkbox' />
              Click to complete.
            </label>
          </span>
        </div>
        <div className='item__btns'>
          <LinkButton
            path={'/'}
            btnStyle={'green__btn'}
            obj={
              <object
                className='obj__discord'
                data={faceObj}
                type=''
                aria-label='smile'
              />
            }
          >
            Community on discord
          </LinkButton>
          <LinkButton
            path={'/'}
            btnStyle={'blue__btn'}
            obj={
              <object
                className='obj__join'
                data={lightObj}
                type=''
                aria-label='smile'
              />
            }
          >
            Join the challenge
          </LinkButton>
        </div>
      </div>
      <div>
        <LinkButton btnStyle='blue__btn' path='https://codepen.io/'>
          Practice
        </LinkButton>
      </div>
      <div className='founder'>Founder</div>
      <div className='tabpanel__additional'>
        <Additional
          obj={objUpload}
          desc='Access supplementary material to accelerate your development'
          link='https://google.com'
          title='Complementary material'
        />
        <Additional
          obj={objWallpaper}
          desc='Download exclusive fireLab wallpapers and customize your machine'
          link='https://google.com'
          title='Exclusive wallpapers'
        />
      </div>
    </div>
  );
};

export default memo(CourseInfo);
