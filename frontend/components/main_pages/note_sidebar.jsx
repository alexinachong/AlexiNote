import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';
// import TopNavContainer from '../top_nav/top_nav_container';
// import MainContainer from '../splash/main_container';
// import Footer from '../splash/footer';
import NotesByNotebookIndexContainer from '../notebooks/notes_by_notebook_index_container';
import NotesIndexContainer from '../notes/notes_index_container';

class NoteSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>

        </Switch>
      </div>
    );
  }

}

export default NoteSidebar;
