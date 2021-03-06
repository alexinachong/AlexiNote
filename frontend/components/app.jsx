import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

import NotebooksIndexContainer from './notebooks/notebooks_index_container';
import NotebookCreateFormContainer from './notebooks/notebook_create_form_container';
import LeftNavContainer from './left_nav/left_nav_container';
import NotesByNotebookIndexContainer from './notebooks/notes_by_notebook_index_container';
import NotebookUpdateFormContainer from './notebooks/notebook_update_form_container';
import NotesIndexContainer from './notes/notes_index_container';
import NoteShowContainer from './notes/note_show_container';
import NoteCreateFormContainer from './notes/note_create_form_container';



import SplashPageContainer from './main_pages/splash_page_container';
import SessionPageContainer from './main_pages/session_page_container';

const App = () => (
  <div className="container">
    <Switch>
      <AuthRoute exact path="/" component={SplashPageContainer} />
      <AuthRoute exact path="/login" component={SplashPageContainer} />
    </Switch>

    <ProtectedRoute path="/" component={LeftNavContainer} />
    <ProtectedRoute path="/notes" component={NotesIndexContainer} />
    <ProtectedRoute path="/notes/:noteId" component={NoteShowContainer} />


    <ProtectedRoute exact path="/notebooks/:notebookId/edit" component={NotebookUpdateFormContainer} />

    <Switch>
      <ProtectedRoute path="/notebooks/new" component={NotebooksIndexContainer} />
      <ProtectedRoute path="/notebooks/:notebookId" component={NotesByNotebookIndexContainer} />
      <ProtectedRoute path="/notebooks" component={NotebooksIndexContainer} />
    </Switch>

    <ProtectedRoute path="/notebooks/:notebookId/notes/new" component={NoteCreateFormContainer} />

    <ProtectedRoute path="/notebooks/new" component={NotebookCreateFormContainer} />

    <ProtectedRoute path="/notebooks/:notebookId/notes/:noteId" component={NoteShowContainer} />

  </div>
);

export default App;
