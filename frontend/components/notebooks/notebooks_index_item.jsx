import React from 'react';
import { Link } from 'react-router-dom';

const NotebooksIndexItem = ({ notebook, deleteNotebook }) => {
  return (
    <div>
      <Link to={`/notebooks/${notebook.id}`}>
        <div className="notebook-preview">
          <section className=""></section>
            {notebook && notebook.title}
          <button onClick={() => deleteNotebook(notebook.id)}>Delete</button>
        </div>
      </Link>
    </div>
  );
};

export default NotebooksIndexItem;
