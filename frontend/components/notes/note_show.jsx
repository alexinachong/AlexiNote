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
    this.props.createNote(this.state).then((response) => this.props.history.push('/notes'));
  }

  render () {
    const note = this.props.note;
    if (!note) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.title}
              placeholder="Title your notebook"
              onChange={this.update('title')} />
          </label>

          <input type="submit" value="Save" />
        </form>



        <TextEditor value={note.description} placeholder="Just start typing..." />

        <h6>{note.title}</h6>
        <p>{note.description}</p>
      </div>
    );
  }
}

export default NoteShow;
