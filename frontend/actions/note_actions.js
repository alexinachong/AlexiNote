import * as NoteAPIUtil from '../utils/note_api_util';
import { fetchNotebook } from './notebook_actions';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

const receiveNotes = (notes) => ({
  type: RECEIVE_NOTES,
  notes
});

const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note
});

const removeNote = (noteId) => ({
  type: REMOVE_NOTE,
  noteId
});

export const fetchNotes = () => dispatch => (
  NoteAPIUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNotesByNotebook = (notebookId) => dispatch => (
  NoteAPIUtil.fetchNotesByNotebook(notebookId)
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = (id) => dispatch => (
  NoteAPIUtil.fetchNote(id)
    .then(note => dispatch(receiveNote(note)))
);

export const createNote = (notebookId, note) => dispatch => (
  NoteAPIUtil.createNote(notebookId, note)
    .then(newNote => dispatch(receiveNote(newNote)))
);

export const updateNote = (noteId, note) => dispatch => (
  NoteAPIUtil.updateNote(noteId, note)
    .then(updatedNote => dispatch(receiveNote(updatedNote)))
);

export const deleteNote = (noteId) => dispatch => (
  NoteAPIUtil.deleteNote(noteId)
    .then(note => dispatch(removeNote(noteId)))
);
