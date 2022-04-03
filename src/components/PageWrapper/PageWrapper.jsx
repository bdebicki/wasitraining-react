import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Navigation from '../Navitation/Navigation';
import BgCover from '../BgCover/BgCover';

function PageWrapper({ children }) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <div>{children}</div>
      <BgCover />
    </>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node,
};

PageWrapper.defaultProps = {
  children: null,
};

export default PageWrapper;
