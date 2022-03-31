import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../../system/Link/Link';

const componentClassName = 'footer';
const aboutClassName = 'aboutSection';

function Footer({ isLight }) {
  const getComponentClassNames = () => classNames(
    componentClassName,
    {
      [`${componentClassName}--isLight`]: isLight,
    },
  );

  return (
    <footer className={getComponentClassNames()}>
      <p className="cookiesSection">
        yep. this site uses cookies. click&nbsp;
        <Link href="/cookies-policy">here</Link>
        &nbsp;for more.
      </p>
      <section className={aboutClassName}>
        <p className={`${aboutClassName}__copyrights`}>made with ❤ in Gdynia 2017</p>
        <Link href="/about" isInverted className={`${aboutClassName}__aboutLink`}>about</Link>
      </section>
    </footer>
  );
}

Footer.propTypes = {
  isLight: PropTypes.bool,
};

Footer.defaultProps = {
  isLight: false,
};

export default Footer;
