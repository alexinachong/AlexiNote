// import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactQuill from 'react-quill';
// import TextEditor from './text_editor';
//
// class NoteCreateForm extends React.Component {
//   constructor (props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.state = this.props.note;
//   }
//
//   componentWillReceiveProps(newProps) {
//     this.setState(newProps.note);
//   }
//
//   update(field) {
//     return (e) => {
//       this.setState({[field]: e.target.value});
//     };
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.createNote(this.state).then((response) => this.props.history.push(`/notes`));
//   }
//
//   render () {
//     return (
//       <div>
//         <div className="note-show-container">
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               <input
//                 type="text"
//                 value={this.state.title}
//                 placeholder="Title your note"
//                 onChange={this.update('title')} />
//             </label>
//
//             <TextEditor placeholder="Just start typing..." value={this.state.editorHtml} />
//
//           <input type="submit" value="Save" />
//           </form>
//
//         </div>
//       </div>
//     );
//   }
// }
//
// export default NoteCreateForm;

import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import TextEditor from './text_editor';
import PropTypes from 'prop-types';

class NoteCreateForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editorHtml: this.props.note.description,
      note: this.props.note,
      theme: 'snow'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.note);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  update(field) {
    console.log(field);
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    this.props.createNote(this.props.notebookId, { title: this.state.title, description: this.state.editorHtml }).then((response) => this.props.history.push(`/notes`));
  }

  render () {
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

export default NoteCreateForm;

NoteCreateForm.modules = {
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

NoteCreateForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

NoteCreateForm.propTypes = {
  placeholder: PropTypes.string,
};
