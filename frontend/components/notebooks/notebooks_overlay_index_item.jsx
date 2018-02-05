import React from 'react';
import { Link } from 'react-router-dom';


const NotebooksOverlayIndexItem = ({ notebook, deleteNotebook }) => {
  return (
    <li>
      <Link to={`/notebooks/${notebook.id}`}>
        {notebook.title}
      </Link>&nbsp;
      <button onClick={() => deleteNotebook(notebook.id)}>Delete</button>
    </li>
  );
};

export default NotebooksOverlayIndexItem;
