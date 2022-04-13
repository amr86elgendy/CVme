import React from 'react';
import LoaderComponent from './loader.style';

export default function Loader() {
  return (
    <LoaderComponent>
      <div className='spinner'>
        <div></div>
        <div></div>
      </div>
    </LoaderComponent>
  );
}
