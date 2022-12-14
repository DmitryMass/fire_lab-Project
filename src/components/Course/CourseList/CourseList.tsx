import React, { FC, useState, useCallback } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import VideoBox from '../../VideoBox/VideoBox';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Title from '../../Title/Title';

import { ICourseList } from '../../../types/courseList';
import CourseInfo from './CourseInfo/CourseInfo';
import { Accordion, AccordionSummary, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import 'react-tabs/style/react-tabs.scss';
import './course-list.scss';

const CourseList: FC = () => {
  const arr: ICourseList[] = [
    {
      id: '1',
      title: 'Opening of the fire labs event',
      checked: true,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
    {
      id: '2',
      title: `Part 01
          - Creating the project and performing the initial setup`,
      checked: false,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
    {
      id: '3',
      title: `Part 02
          - Creating the project and performing the initial setup`,
      checked: false,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
    {
      id: '4',
      title: `Part 03
          - Creating the project and performing the initial setup`,
      checked: false,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
    {
      id: '5',
      title: `Part 04
          - Creating the project and performing the initial setup`,
      checked: false,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
    {
      id: '6',
      title: `Part 05
          - Creating the project and performing the initial setup`,
      checked: false,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
    {
      id: '7',
      title: `Part 06
          - Creating the project and performing the initial setup`,
      checked: false,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
    {
      id: '8',
      title: `Part 07
          - Creating the project and performing the initial setup`,
      checked: false,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
    {
      id: '9',
      title: `Part 08
          - Creating the project and performing the initial setup`,
      checked: false,
      desc: 'In this class we will start the project by creating the base structure of the application using ReactJS, Vite and TailwindCSS. We will also setup our project in GraphCMS by creating the application entities and integrating the GraphQL API generated by the platform in our front-end using Apollo Client.',
    },
  ];
  const [active, setActive] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  const handleFalseClick = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <>
      <Tabs>
        <Grid container spacing={2}>
          <Grid item md={8} lg={9} xs={12}>
            {arr.map((item) => (
              <TabPanel key={item.id}>
                <VideoBox />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='course__icon' />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography className='course__details'>Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <CourseInfo item={item} />
                    </div>
                  </AccordionDetails>
                </Accordion>
              </TabPanel>
            ))}
          </Grid>
          <Grid item md={4} lg={3}>
            <div onClick={handleClick} className='menuIcon'>
              <MenuIcon />
            </div>
            <div className={active ? 'active' : 'non__active'}>
              <TabList>
                <div className='schedule__wrapper'>
                  <Title modificator='schedule__title'>Schedule</Title>
                </div>
                {arr.map((item) => (
                  <Tab key={item.id} onClick={handleFalseClick}>
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
                    </div>
                    <h3 className='course__title'>{item.title}</h3>
                  </Tab>
                ))}
              </TabList>
            </div>
          </Grid>
        </Grid>
      </Tabs>
    </>
  );
};

export default CourseList;
