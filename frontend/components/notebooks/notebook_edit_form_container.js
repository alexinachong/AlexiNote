import { connect } from 'react-redux';
import { updateNotebook, deleteNotebook } from '../../actions/notebook_actions';
import NotebookEditForm from './notebook_edit_form';

const mapStateToProps = (state, ownProps) => ({
  notebook: { title: "" }
});

// is the path below correct? Account for errors
const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookEditForm);
