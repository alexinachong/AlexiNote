import React from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';

class TextEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = { editorHtml: '', theme: 'snow' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (html) {
  	this.setState({ editorHtml: html });
  }

  render () {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          placeholder="Title your note"
          onChange={this.update('title')} />

        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          placeholder={this.props.placeholder}
         />
       </div>
     );
  }
}

export default TextEditor;

TextEditor.modules = {
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

TextEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

TextEditor.propTypes = {
  placeholder: PropTypes.string,
};
