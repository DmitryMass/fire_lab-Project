import React, { FC } from 'react';
import { ICourseList } from '../../../../types/courseList';
import LinkButton from '../../../Buttons/LinkButton/LinkButton';

import faceObj from '../../../../assets/icons/smile-logo.svg';
import lightObj from '../../../../assets/icons/lightning.svg';

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
      <div>Founder</div>
    </div>
  );
};

export default CourseInfo;
