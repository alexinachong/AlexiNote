import { connect } from 'react-redux';
import { fetchNotebooks, deleteNotebook } from '../../actions/notebook_actions';
import NotebooksOverlay from './notebooks_overlay';

const mapStateToProps = (state, ownProps) => ({
  notebooks: Object.values(state.entities.notebooks)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksOverlay);
