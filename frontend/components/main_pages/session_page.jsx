import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';

import LeftNavContainer from '../left_nav/left_nav_container';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';
import NotebookCreateFormContainer from '../notebooks/notebook_create_form_container';
import NotesByNotebookIndexContainer from '../notebooks/notes_by_notebook_index_container';
import NotebookUpdateFormContainer from '../notebooks/notebook_update_form_container';
import NotesIndexContainer from '../notes/notes_index_container';
import NoteShowContainer from '../notes/note_show_container';

class SessionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="session-page-container">
        <ProtectedRoute path="/" component={LeftNavContainer} />
        <ProtectedRoute path="/notes" component={NotesIndexContainer} />
        <ProtectedRoute className="notes-by-notebook-index-container" exact path="/notebooks/:notebookId" component={NotesByNotebookIndexContainer} />

      </div>
    );
  }

}

export default SessionPage;
