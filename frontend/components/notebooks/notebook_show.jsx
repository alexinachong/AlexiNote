import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import NotebookShowIndexItem from './notebook_show_index_item';

class NotebookShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
  }

  noteCounts() {
    if (this.props.notebook.note_ids.length === 1) {
      return <p>{this.props.notebook.note_ids.length} note</p>;
    } else {
      return <p>{this.props.notebook.note_ids.length} notes</p>;
    }
  }

  render () {
    const notebook = this.props.notebook;
    // redirect from App instead
    // return (
    //   <div><Redirect to="/notebooks" /></div>
    // );
    if (!notebook) {
      return <div>Loading...</div>;
    }

    return (
      <div className="notebook-show-container">
        <section className="notebook-show-header">
          <section className="notebook-show-header-info">
            <Link to={`/notebooks/${notebook.id}/edit`} className="">Info</Link>
          </section>
          <section className="notebook-show-header-title">
            <h4>{notebook.title}</h4>
          </section>
        </section>

        <section className="notebook-show-list">
          <section className="notebook-show-list-count">
            {this.noteCounts()}
          </section>
          <section className="notebook-show-list-items">
            <ul>
              {
                this.props.notes.map(note => (
                  <NotebookShowIndexItem
                    key={note.id}
                    fetchNotesByNotebook={this.props.fetchNotesByNotebook}
                    deleteNote={this.props.deleteNote}
                    fetchNote={this.props.fetchNote}
                    note={note} />
                ))
              }
            </ul>
          </section>

        </section>
      </div>
    );
  }

}

export default NotebookShow;
