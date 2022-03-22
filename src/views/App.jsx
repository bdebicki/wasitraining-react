import React, { Fragment } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Edition from './Edition';

// import '@/styles/index.scss';

const App = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li><NavLink to="/2017">2017</NavLink></li>
          <li><NavLink to="/2016">2016</NavLink></li>
          <li><NavLink to="/2015">2015</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Edition edition="2017" />} />
        <Route path="/2017" element={<Edition edition="2017" />} />
        <Route path="/2016" element={<Edition edition="2016" />} />
        <Route path="/2015" element={<Edition edition="2015" />} />
      </Routes>
    </Fragment>
  );
};

export default App;
