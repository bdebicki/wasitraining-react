import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const componentClassName = 'bgVideo';

function BgVideo({ isBlurred }) {
  const getComponentClassName = () => classNames(
    componentClassName,
    {
      [`${componentClassName}--isBlurred`]: isBlurred,
    },
  );

  return (
    <div className={getComponentClassName()} style={{ display: 'none' }}>
      <video
        autoPlay
        className={`${componentClassName}__video`}
        width="1366"
        height="768"
        loop
        muted
        poster="/images/bg-img.png"
        src="/videos/bg-video.webm"
      />
    </div>
  );
}

BgVideo.propTypes = {
  isBlurred: PropTypes.bool,
};

BgVideo.defaultProps = {
  isBlurred: true,
};

export default BgVideo;
