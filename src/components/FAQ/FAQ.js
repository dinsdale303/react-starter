import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';
import styles from '../FAQ/FAQ.scss';

const FAQ = ({ titleText, image, description }) => (
  <Container>
    <Hero titleText={titleText} image={image} />
    <div className={styles.description}>{description}</div>
  </Container>
);

FAQ.propTypes = {
  titleText: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};

FAQ.defaultProps = {
  titleText: settings.FAQ.title,
  image: settings.FAQ.image,
  description: settings.FAQ.description,
};

export default FAQ;
