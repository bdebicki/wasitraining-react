import React from 'react';
import Routing from '../components/Routing/Routing';
import BgVideo from '../components/BgVideo/BgVideo';
import Footer from '../components/Footer/Footer';
import BgCover from '../components/BgCover/BgCover';

// import '@/styles/index.scss';

function App() {
  return (
    <>
      <Routing />
      <BgVideo />
      <BgCover />
      <Footer />
    </>
  );
}

export default App;
