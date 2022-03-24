import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        <a className="link" href="#cookies-policy">here</a>
        &nbsp;for more.
      </p>
      <section className={aboutClassName}>
        <p className={`${aboutClassName}__copyrights`}>made with ❤ in Gdynia 2017</p>
        <a className="link link--inverted aboutSection__aboutLink" href="#about">about</a>
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
