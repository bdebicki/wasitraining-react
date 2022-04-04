import React from 'react';
import editionRoutes from '../../helpers/editionRoutes';
import Date from './components/Date';

const componentClassName = 'timeline';

function Timeline() {
  return (
    <nav className={componentClassName}>
      <ul className={`${componentClassName}__dates`}>
        {editionRoutes.map(({ edition, url }) => (
          <Date key={`timeline-${edition}`} url={url}>
            {edition}
          </Date>
        ))}
      </ul>
    </nav>
  );
}

export default Timeline;
