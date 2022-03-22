import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Edition = ({ edition }) => {
  useEffect(() => {
    const getFestivalData = async () => {
      const { data } = await axios.get(`./assets/data/festivals/edition${edition}.json`);

      console.log(data);
    };

    getFestivalData();
  }, [edition]);

  return (
    <div>
      {edition}
    </div>
  );
};

Edition.propTypes = {
  edition: PropTypes.string.isRequired,
};

export default Edition;
