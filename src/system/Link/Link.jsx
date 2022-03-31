import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

const componentClassName = 'link';
const isExternalLink = (link) => link.startsWith('http');

function Link({
  href,
  children,
  className,
  isInverted,
}) {
  const getComponentClassName = () => classNames(
    componentClassName,
    className,
    {
      [`${componentClassName}--is-inverted`]: isInverted,
    },
  );

  if (isExternalLink(href)) {
    return (
      <a
        className={getComponentClassName()}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      className={getComponentClassName()}
      to={href}
    >
      {children}
    </RouterLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  isInverted: PropTypes.bool,
};

Link.defaultProps = {
  className: '',
  isInverted: false,
};

export default Link;
