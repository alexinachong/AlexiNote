import React from 'react';
import { Link } from 'react-router-dom';

const NotesIndexItem = ({ note, deleteNote, fetchNote, fetchNotes }) => {
  return (
    <li>
      <div>
          {note.title}&nbsp;
          {note.description}&nbsp;
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </li>
  );
};

export default NotesIndexItem;
