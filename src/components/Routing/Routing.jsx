import React from 'react';
import { Route, Routes } from 'react-router-dom';
import editionRoutes from '../../helpers/editionRoutes';
import Edition from '../../views/Edition';
import Intro from '../../views/Intro';
import About from '../../views/About';
import Cookies from '../../views/Cookies';

function Routing() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Intro />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/cookies-policy"
        element={<Cookies />}
      />
      {editionRoutes.map((edition) => (
        <Route
          key={edition.edition}
          path={edition.url}
          element={<Edition edition={edition.edition} />}
        />
      ))}
    </Routes>
  );
}

export default Routing;
