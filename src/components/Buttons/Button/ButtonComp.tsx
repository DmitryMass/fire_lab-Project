import React, { FC } from 'react';

import '../LinkButton/LinkButton';

interface IButtonComp {
  children: React.ReactNode | string;
  btnStyle: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const ButtonComp: FC<IButtonComp> = ({ children, btnStyle, type: btnType }) => {
  return (
    <button type={btnType ? btnType : 'button'} className={btnStyle}>
      {children}
    </button>
  );
};

export default ButtonComp;
