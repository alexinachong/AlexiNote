import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import { createNotebook } from '../../actions/notebook_actions';
import NoteCreateForm from './note_create_form';

const mapStateToProps = (state, ownProps) => {
  // let notebookId;
  // if (state.entities.notebooks.length === 0) {
  //   createNotebook(notebook: { })
  // }
  // return {
  //   note: { title: "", description: "", notebook_id: state.entities.notebooks.first.id }
  // };
};

// is the path below correct? Account for errors
const mapDispatchToProps = (dispatch, ownProps) => ({
  // createNote: (note) => dispatch(createNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteCreateForm);
