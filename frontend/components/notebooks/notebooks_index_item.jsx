import React from 'react';
import { Link } from 'react-router-dom';

// <img onClick={() => deleteNotebook(notebook.id)} src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/evernote_delete_trash_icon.png" />


const NotebooksIndexItem = ({ notebook, deleteNotebook }) => {
  let noteCount = "";
  if (notebook.numNotes === 1) {
    noteCount = `${notebook.numNotes} note`;
  } else {
    noteCount = `${notebook.numNotes} notes`;
  }

  return (
    <div>
      <Link to={`/notebooks/${notebook.id}`}>
        <div className="notebook-preview">
          <section className="notebook-preview-header">
            <p className="notebook-preview-title">{notebook && notebook.title}</p>
            <p className="notebook-preview-count">{noteCount}</p>
          </section>
          <section className="notebook-preview-buttons">
            <button onClick={() => deleteNotebook(notebook.id)}>Delete</button>
          </section>
        </div>
      </Link>
    </div>
  );
};

export default NotebooksIndexItem;
