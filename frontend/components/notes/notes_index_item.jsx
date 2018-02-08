import React from 'react';
import { Link } from 'react-router-dom';

const NotesIndexItem = ({ note, deleteNote, fetchNote, fetchNotes }) => {
  let htmlCode = note.description;
  let div = document.createElement("div");
  div.innerHTML = htmlCode;
  let text = div.textContent || div.innerText || "";

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
            {note.time_ago} ago
          </section>

          <br />
          <section className="note-preview-description">
            {text}
          </section>
        </div>
      </Link>
    </div>
  );
};

export default NotesIndexItem;
