import { connect } from 'react-redux';
import { fetchNotebooks, createNotebook, deleteNotebook } from '../../actions/notebook_actions';
import NotebooksOverlay from './notebooks_overlay';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    notebooks: Object.values(state.entities.notebooks)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksOverlay);
