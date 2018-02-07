import React from 'react';
import { Link } from 'react-router-dom';


const NotebookShowIndexItem = ({ note, fetchNotesByNotebook, deleteNote, fetchNote }) => {
  return (
    <li>
      <div>
        <Link to={`/notes/${note.id}`}>
          {note.title}
        </Link>&nbsp;
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </li>
  );
};

export default NotebookShowIndexItem;
