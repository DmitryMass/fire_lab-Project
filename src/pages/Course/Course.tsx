import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import useActions from '../../store/hooks/actions';
import CourseList from '../../components/Course/CourseList/CourseList';
import Logo from '../../components/Logo/Logo';

import './course.scss';

const Course: FC = () => {
  const { logoutUser } = useActions();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      if (await localStorage.user) {
        delete localStorage.user;
        dispatch(logoutUser());
        return;
      }
    } catch (e) {
      alert('error');
    }
  };

  return (
    <div className='course'>
      <Logo
        modificator='logo__home logo__course'
        path='/course'
        handleClick={handleClick}
      />
      <CourseList />
    </div>
  );
};

export default Course;
