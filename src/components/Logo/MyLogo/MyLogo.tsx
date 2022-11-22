import React, { FC } from 'react';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const MyLogo: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        color: 'white',
      }}
    >
      <RocketLaunchIcon />
      <a href={'https://github.com/DmitryMass'} target='blank'>
        Jimmy-co
      </a>
    </div>
  );
};

export default MyLogo;
