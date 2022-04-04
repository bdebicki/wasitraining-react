import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SVG_MASK, SVG_MASK_BASE, SVG_MASK_BG } from '../../../enums/classNames';

const componentClassName = 'timelineDate';
const dateMaskClassName = 'dateMask';

function Date({ children, url }) {
  const maskId = `yearMask${children}`;
  const getMaskClassNames = () => classNames(
    dateMaskClassName,
    SVG_MASK,
  );
  const getBgClassNames = () => classNames(
    `${dateMaskClassName}__bg`,
    SVG_MASK_BG,
  );

  return (
    <li className={componentClassName}>
      <Link
        className={`${componentClassName}__link`}
        to={url}
      >
        <span className={`${componentClassName}__year`}>{children}</span>
        <svg className={getMaskClassNames()}>
          <defs>
            <mask id={maskId} maskUnits="userSpaceOnUse">
              <rect
                className={SVG_MASK_BASE}
                width="100%"
                height="100%"
              />
              <text
                className={`${dateMaskClassName}__text`}
                x="50%"
                y="50%"
              >
                {children}
              </text>
            </mask>
          </defs>
          <rect className={getBgClassNames} mask={`url(#${maskId})`} />
        </svg>
      </Link>
    </li>
  );
}

Date.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Date;
