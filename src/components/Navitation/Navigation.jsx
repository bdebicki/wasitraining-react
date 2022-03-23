import React from 'react';
import { NavLink } from 'react-router-dom';
import editionRoutes from '../../helpers/editionRoutes';

function Navigation() {
  return (
    <nav>
      <ul>
        {editionRoutes.map((edition) => (
          <li key={edition.edition}>
            <NavLink to={edition.url}>{edition.edition}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
