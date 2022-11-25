import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type CourseStatusProps = {
  status?: string;
};

const CourseStatus: FC<CourseStatusProps> = ({ status }) => {
  return <NavLink to={'/course'}>CourseStatus</NavLink>;
};

export default CourseStatus;
