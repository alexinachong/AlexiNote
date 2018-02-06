import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebook_actions';
import NotebookCreateForm from './notebook_create_form';

const mapStateToProps = (state, ownProps) => ({
  notebook: { title: "" }
});

// is the path below correct? Account for errors
const mapDispatchToProps = (dispatch, ownProps) => ({
  createNotebook: (notebook) => dispatch(createNotebook(notebook))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookCreateForm);
