import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PageWrapper from '../components/PageWrapper/PageWrapper';

function Edition({ edition }) {
  useEffect(() => {
    const getFestivalData = async () => {
      const { data } = await axios.get(`./assets/data/festivals/edition${edition}.json`);

      console.log(data);
    };

    getFestivalData();
  }, [edition]);

  return (
    <PageWrapper>
      {edition}
    </PageWrapper>
  );
}

Edition.propTypes = {
  edition: PropTypes.string.isRequired,
};

export default Edition;
