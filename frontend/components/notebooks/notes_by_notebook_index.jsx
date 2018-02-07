import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import NotebookShowIndexItem from './notebook_show_index_item';

class NotesByNotebookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotesByNotebook(this.props.notebookId);
  }

  componentWillReceiveProps(newProps) {
    const { notebookId, fetchNotesByNotebook } = this.props;
    if (notebookId !== newProps.notebookId) {
      fetchNotesByNotebook(newProps.notebookId);
    }
  }

  noteCounts() {
    console.log(this.props.notebook);
    if (this.props.notebook.numNotes === 1) {
      return <p>{this.props.notebook.numNotes} note</p>;
    } else {
      return <p>{this.props.notebook.numNotes} notes</p>;
    }
  }

  render () {
    return (
      <div className="note-sidebar-container">
        <section className="notebook-show-header">
          <section className="notebook-show-header-info">
            <Link to={`/notebooks/${this.props.notebookId}/edit`} className="">Info</Link>
          </section>
          <section className="notebook-show-header-title">
            <h4>{this.props.notebookId.title}</h4>
          </section>
        </section>

        <section className="note-sidebar-list">
          <section className="note-sidebar-list-count">
            {this.noteCounts()}
          </section>
          <section className="note-sidebar-list-items">
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

export default NotesByNotebookIndex;
