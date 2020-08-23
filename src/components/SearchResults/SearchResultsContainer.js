import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForList } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const string = props.match.params.id;

  return {
    cards: getCardsForList(state, string),
  };
};

export default connect(mapStateToProps)(SearchResults);
