import { connect } from 'react-redux';
import { fetchNotes, fetchNote, deleteNote } from '../../actions/note_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state, ownProps) => {
	return {
		notes: Object.values(state.entities.notes)
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchNotes: () => dispatch(fetchNotes()),
	deleteNote: noteId => dispatch(deleteNote(noteId)),
	fetchNote: id => dispatch(fetchNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
