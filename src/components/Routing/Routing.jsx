import React from 'react';
import { Route, Routes } from 'react-router-dom';
import editionRoutes from '../../helpers/editionRoutes';
import Edition from '../../views/Edition';

function Routing() {
  return (
    <Routes>
      {editionRoutes.map((edition, index) => {
        if (index === 0) {
          return (
            <Route
              key="root"
              path="/"
              element={<Edition edition={edition.edition} />}
            />
          );
        }
        return (
          <Route
            key={edition.edition}
            path={edition.url}
            element={<Edition edition={edition.edition} />}
          />
        );
      })}
    </Routes>
  );
}

export default Routing;
