import React from 'react';
import { NavLink } from 'react-router-dom';
import editionRoutes from '../helpers/editionRoutes';
import Header from '../components/Header/Header';

function Intro() {
  return (
    <>
      <Header isFullPage />
      <nav>
        <ul>
          {editionRoutes.map((edition) => (
            <li key={edition.edition}>
              <NavLink to={edition.url}>{edition.edition}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Intro;
