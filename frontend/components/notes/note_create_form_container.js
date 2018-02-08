import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import { createNotebook } from '../../actions/notebook_actions';
import NoteCreateForm from './note_create_form';

const mapStateToProps = (state, ownProps) => {
  return {
    note: { title: "", description: "" },
    notebookId: ownProps.match.params.notebookId ? ownProps.match.params.notebookId : null
  };
};

// is the path below correct? Account for errors
const mapDispatchToProps = (dispatch, ownProps) => ({
  createNote: (notebookId, note) => dispatch(createNote(notebookId, note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteCreateForm);
