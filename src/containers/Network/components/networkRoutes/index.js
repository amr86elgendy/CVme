import { NetworkCardWrapper } from './networkRoutes.style';
import React from 'react';

import { Link } from 'react-router-dom';
import { networkLinks } from '../constants';
import { useLocation } from 'react-router-dom';

const NetworkCard = () => {
  const { pathname } = useLocation();

  const checkActive = (path) => pathname.split('/').includes(path);

  return (
    <NetworkCardWrapper>
      <h1 className='heading-1'>network</h1>
      {networkLinks.map((item) => (
        <div
          className={checkActive(item.path) ? 'sub-title active' : 'sub-title'}
          key={item.label}
        >
          <button>{item.icon}</button>
          <Link to={`${item.path}`}>
            <p>{item.label}</p>
          </Link>
        </div>
      ))}
    </NetworkCardWrapper>
  );
};

export default NetworkCard;
