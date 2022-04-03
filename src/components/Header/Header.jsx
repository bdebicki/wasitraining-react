import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const headerClassName = 'header';
const pageNameClassName = 'pageName';
const PAGE_NAME = 'was it raining at the open\'er festival?';

function Header({ children, isFullPage }) {
  const getHeaderClassNames = () => classNames(
    headerClassName,
    {
      [`${headerClassName}--introHeader`]: isFullPage,
    },
  );

  const getPageNameClassNames = () => classNames(
    pageNameClassName,
    {
      [`${pageNameClassName}--introHeader`]: isFullPage,
    },
  );

  return (
    <header
      className={getHeaderClassNames()}
      data-bg-text={PAGE_NAME}
      id="header"
    >
      <h1 className={getPageNameClassNames()}>
        <Link
          className={`${pageNameClassName}__link`}
          to="/"
        >
          {PAGE_NAME}
        </Link>
      </h1>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  isFullPage: PropTypes.bool,
};

Header.defaultProps = {
  children: null,
  isFullPage: false,
};

export default Header;
