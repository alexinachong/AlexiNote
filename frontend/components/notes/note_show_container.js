import { connect } from 'react-redux';
import { fetchNote } from '../../actions/note_actions';
import NoteShow from './note_show';

const mapStateToProps = (state, ownProps) => ({
  note: state.entities.notes[ownProps.match.params.noteId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchNote: (id) => dispatch(fetchNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);
