import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import NotebookShowIndexItem from './notebook_show_index_item';

class NotesByNotebookIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notebook: this.props.notebook,
      notes: this.props.notes
    };
  }

  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    this.props.fetchNotesByNotebook(this.props.notebookId);
  }

  componentWillReceiveProps(newProps) {
    const { notebookId, fetchNotesByNotebook } = this.props;
    if (notebookId !== newProps.notebookId) {
      fetchNotesByNotebook(newProps.notebookId);
    }
  }

  noteCounts() {
    if (this.props.notebook && this.props.notebook.numNotes === 1) {
      return <p>{this.props.notebook.numNotes} note</p>;
    } else if (this.props.notebook) {
      return <p>{this.props.notebook.numNotes} notes</p>;
    } else {
      return <p>0 notes</p>;
    }
  }

  render () {
    const {notes, notebook} = this.props;
    if (!notes || !notebook) {
      return <div>Loading...</div>;
    }
    return (
      <div className="note-sidebar-container">
        <section className="notes-by-nb-index-header">
          <section className="notes-by-nb-index-header-info">
            <Link to={`/notebooks/${this.props.notebookId}/edit`} className="">Info</Link>
          </section>
          <section className="notes-by-nb-index-header-title">
            <h4>{this.props.notebook.title}</h4>
          </section>
        </section>

        <section className="note-sidebar-list">
          <section className="note-sidebar-list-count">
            {this.noteCounts()}
          </section>
          <section className="note-sidebar-list-items">
            <section className="items">
              {
                this.props.notes.map(note => (
                  <NotebookShowIndexItem
                    key={note.id}
                    notebookId={note.notebook_id}
                    fetchNotesByNotebook={this.props.fetchNotesByNotebook}
                    deleteNote={this.props.deleteNote}
                    fetchNote={this.props.fetchNote}
                    note={note} />
                ))
              }
            </section>
          </section>

        </section>
      </div>
    );
  }

}

export default NotesByNotebookIndex;
