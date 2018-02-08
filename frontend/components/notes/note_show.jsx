import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import TextEditor from './text_editor';

class NoteShow extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.note;
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.note);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateNote(this.state).then((response) => this.props.history.push(`/notebooks/${this.props.note.id}`));
  }

  render () {
    const note = this.props.note;
    if (!note) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="note-show-container">
          <form onSubmit={this.handleSubmit}>
            <p>{this.state.notebookId}</p>

            <label>
              <input
                type="text"
                value={this.state.title}
                placeholder="Title your notebook"
                onChange={this.update('title')} />
            </label>

            <TextEditor value={note.description} placeholder="Just start typing..." />

          <input type="submit" value="Save" />
          </form>




          <h6>{note.title}</h6>
          <p>{note.description}</p>
        </div>
      </div>
    );
  }
}

export default NoteShow;
