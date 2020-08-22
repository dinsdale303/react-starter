import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';
import styles from '../Info/Info.scss';

const Info = ({ titleText, image, description }) => (
  <Container>
    <Hero titleText={titleText} image={image} />
    <div className={styles.description}>{description}</div>
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};

Info.defaultProps = {
  titleText: settings.Info.title,
  image: settings.Info.image,
  description: settings.Info.description,
};

export default Info;
