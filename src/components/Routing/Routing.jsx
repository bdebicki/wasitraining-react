import React from 'react';
import { Route, Routes } from 'react-router-dom';
import editionRoutes from '../../helpers/editionRoutes';
import Edition from '../../views/Edition';
import Intro from '../../views/Intro';

function Routing() {
  return (
    <Routes>
      <Route
        key="root"
        path="/"
        element={<Intro />}
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
