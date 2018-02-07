import React from 'react';
import { Link } from 'react-router-dom';


const NotebooksIndexItem = ({ notebook, deleteNotebook }) => {
  return (
    <li>
      <div>
        <Link to={`/notebooks/${notebook.id}`}>
          {notebook.title}
        </Link>&nbsp;
        <button onClick={() => deleteNotebook(notebook.id)}>Delete</button>
      </div>
    </li>
  );
};

export default NotebooksIndexItem;
