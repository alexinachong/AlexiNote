import { connect } from 'react-redux';
import { fetchNotebook } from '../../actions/notebook_actions';
import NotebookShow from './notebook_show';

const mapStateToProps = (state, ownProps) => ({
  notebook: state.entities.notebooks[ownProps.match.params.notebookId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchNotebook: (id) => dispatch(fetchNotebook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
