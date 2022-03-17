import React, { useEffect } from 'react';
import axios from 'axios';

// import '@/styles/index.scss';

const App = () => {
  useEffect(() => {
    const getFestivalData = async () => {
      const { data } = await axios.get('./assets/festivalEditions.json');

      console.log(data);
    }

    getFestivalData();
  });


  return (
    <div>
      app
    </div>
  );
};

export default App;
