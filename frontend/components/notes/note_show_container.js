import { connect } from 'react-redux';
import { fetchNote, updateNote, deleteNote } from '../../actions/note_actions';
import NoteShow from './note_show';

const mapStateToProps = (state, ownProps) => {
	return {
		note: state.entities.notes[ownProps.match.params.noteId],
		notebookId: ownProps.match.params.notebookId
			? ownProps.match.params.notebookId
			: null
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchNote: id => dispatch(fetchNote(id)),
	updateNote: (noteId, note) => dispatch(updateNote(noteId, note)),
	deleteNote: noteId => dispatch(deleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);
