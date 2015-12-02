import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import { load } from './actions';
import createPage from 'panels-pages/component';
import toPageId from 'panels-pages/to-page-id';

const Page = createPage(
  props => props.dispatch(load(props.pageId))
);

function mapStateToProps(state, props) {
  const pageId = toPageId(props.pageUri);

  return {
    ...state.pages[pageId],
    pageId
  };
}

export default connect(mapStateToProps)(Page);
