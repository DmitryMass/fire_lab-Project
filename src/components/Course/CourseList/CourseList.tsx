import React, { FC } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import VideoBox from '../../VideoBox/VideoBox';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Title from '../../Title/Title';

import 'react-tabs/style/react-tabs.scss';
import { ICourseList } from '../../../types/courseList';
import CourseInfo from './CourseInfo/CourseInfo';
import Additional from '../Aditional/Additional';

import objUpload from '../../../assets/icons/upload.svg';
import objWallpaper from '../../../assets/icons/wallpaper-icon.svg';

import './course-list.scss';

const CourseList: FC = () => {
  const arr: ICourseList[] = [
    {
      id: 1,
      title: 'Abertura do evento Ignite labs',
      checked: true,
      desc: 'Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.',
    },
    {
      id: 2,
      title: `Aula 01
          - Criando o projeto e realizando o setup inicial`,
      checked: false,
      desc: 'Some description lorem awdasd wa daw ds daw das aw dacsd awd ad awde asdaw',
    },
    {
      id: 3,
      title: `Aula 01
          - Criando o projeto e realizando o setup inicial`,
      checked: false,
      desc: 'Some description lorem awdasd wa daw ds daw das aw dacsd awd ad awde asdaw',
    },
    {
      id: 4,
      title: `Aula 01
          - Criando o projeto e realizando o setup inicial`,
      checked: false,
      desc: 'Some description lorem awdasd wa daw ds daw das aw dacsd awd ad awde asdaw',
    },
    {
      id: 5,
      title: `Aula 01
          - Criando o projeto e realizando o setup inicial`,
      checked: false,
      desc: 'Some description lorem awdasd wa daw ds daw das aw dacsd awd ad awde asdaw',
    },
  ];

  return (
    <Tabs>
      <TabList>
        <Title modificator='schedule__title'>Schedule</Title>
        {arr.map((item) => (
          <Tab key={item.id}>
            <div className='course__content'>
              <div className='content__wrapper'>
                <TaskAltIcon
                  className={
                    item.checked
                      ? 'course__icon icon__complete'
                      : 'course__icon'
                  }
                />
                <span
                  className={
                    item.checked
                      ? 'course__load load__complete'
                      : 'course__load'
                  }
                >
                  Content
                </span>
              </div>
              <a
                rel='noreferrer'
                className='course__practice'
                href='https://codepen.io/'
                target={'_blank'}
              >
                Practice
              </a>
            </div>
            <h3 className='course__title'>{item.title}</h3>
            <label className='course__checkbox' htmlFor={item.title}>
              <input id={item.title} type='checkbox' />
              Click to complete.
            </label>
          </Tab>
        ))}
      </TabList>
      <div className='tabpanel'>
        <div className='tabpanel__wrapper'>
          {arr.map((item) => (
            <TabPanel key={item.id}>
              <VideoBox />
              <CourseInfo item={item} />
            </TabPanel>
          ))}
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
      </div>
    </Tabs>
  );
};

export default CourseList;
