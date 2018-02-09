import React from 'react';
import { Link } from 'react-router-dom';


const NotebookShowIndexItem = ({ note, notebookId, fetchNotesByNotebook, deleteNote, fetchNote }) => {
  let htmlCode = note.description;
  let div = document.createElement("div");
  div.innerHTML = htmlCode;
  let text = div.textContent || div.innerText || "";

  return (
    <div>
      <Link to={`/notebooks/${note.notebook_id}/notes/${note.id}`}>
        <div className="note-preview">
          <section className="note-preview-header">
            <section className="note-preview-title">
              {note.title}
            </section>
            <section className="notebook-preview-buttons">
              <img onClick={() => deleteNote(note.id)} src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/evernote_delete_trash_icon.png" />
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

export default NotebookShowIndexItem;
