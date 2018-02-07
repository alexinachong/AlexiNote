import { connect } from 'react-redux';
import { fetchNotebook, deleteNotebook } from '../../actions/notebook_actions';
import { fetchNotesByNotebook, deleteNote, fetchNote } from '../../actions/note_actions';
import NotebookShow from './notebook_show';

const mapStateToProps = (state, ownProps) => ({
  notebook: state.entities.notebooks[ownProps.match.params.notebookId],
  notes: Object.values(state.entities.notes)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
  fetchNotesByNotebook: (notebookId) => dispatch(fetchNotesByNotebook(notebookId)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
  fetchNote: (id) => dispatch(fetchNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
