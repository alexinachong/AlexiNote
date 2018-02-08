import React from 'react';
import { Link } from 'react-router-dom';

const NotesIndexItem = ({ note, deleteNote, fetchNote, fetchNotes }) => {
  return (
    <div>
      <Link to={`/notes/${note.id}`}>
        <div className="note-preview">
          <section className="note-preview-header">
            <section className="note-preview-title">
              {note.title}
            </section>
            <section className="note-preview-buttons">
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </section>
          </section>

          <br />
          <section className="note-time">
            {note.time_ago}
          </section>

          <br />
          <section className="note-preview-description">
            {note.description}
          </section>
        </div>
      </Link>
    </div>
  );
};

export default NotesIndexItem;
