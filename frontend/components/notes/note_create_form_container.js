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

// create notebook if none
// Account for errors: no title or notebook or empty description
const mapDispatchToProps = (dispatch, ownProps) => ({
  createNote: (notebookId, note) => dispatch(createNote(notebookId, note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteCreateForm);
