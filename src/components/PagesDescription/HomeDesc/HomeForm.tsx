import React, { FC } from 'react';
import { Formik, Field } from 'formik';

import Title from '../../Title/Title';
import ButtonComp from '../../Buttons/Button/ButtonComp';
import './home-form.scss';

const HomeForm: FC = () => {
  return (
    <div className='form'>
      <Title modificator='form__title'>Sign up for free</Title>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={() => {}}
        validationSchema={''}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className='inputs__wrapper'>
              {errors.name && <div>{errors.name}</div>}
              <Field
                className={'form__input'}
                id='name'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name='name'
                placeholder='Type your name'
              />
              {errors.email && <div>{errors.email}</div>}
              <Field
                className={'form__input'}
                id='email'
                type='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name='email'
                placeholder='Type your email'
              />
              <ButtonComp type='submit' btnStyle={'green__btn'}>
                Secure me spot
              </ButtonComp>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default HomeForm;
