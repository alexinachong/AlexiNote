import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import TextEditor from './text_editor';
import PropTypes from 'prop-types';

class NoteShow extends React.Component {
  constructor (props) {
    super(props);
    let editorHtml = "";
    let title = "";
    if (this.props.note) {
      editorHtml = this.props.note.description;
      title = this.props.note.title;
    }
    this.state = {
      editorHtml,
      title,
      note: this.props.note,
      theme: 'snow'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.note.title);
    this.setState({note: newProps.note, title: newProps.note.title, editorHtml: newProps.note.description});

  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateNote(this.state.note.id, { title: this.state.title, description: this.state.editorHtml }).then((response) => this.props.history.push(`/notes/${this.state.note.id}`));
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
            <label>
              <input
                type="text"
                value={this.state.title}
                placeholder="Title your note"
                onChange={this.update('title')} />
            </label>
            <ReactQuill
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={TextEditor.modules}
              formats={TextEditor.formats}
              placeholder={this.props.placeholder}
             />

          <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    );
  }
}

export default NoteShow;

NoteShow.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
};

NoteShow.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

NoteShow.propTypes = {
  placeholder: PropTypes.string,
};
