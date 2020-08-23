import React from 'react';
import styles from '../SearchResults/SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };
  render() {
    const { cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.cards}>
            {cards.map((cardData) => (
              <div key={cardData.id} className={styles.wrapper}>
                <Card key={cardData.id} {...cardData} />
                <Link className={styles.link} to={`/list/${cardData.listId}`}>
                  <p>Go to the list</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
