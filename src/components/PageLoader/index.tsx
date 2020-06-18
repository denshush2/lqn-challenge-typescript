import React from 'react';
import './styles.scss';
import { pageLoaderTitle } from './constants';
export const PageLoader: React.FC = () => {
  return (
    <div className="page-loader">
      <h1>{pageLoaderTitle}</h1>
    </div>
  );
};
