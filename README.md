# AlexiNote

[AlexiNote live](https://alexinote.herokuapp.com/)

AlexiNote is a note-taking and organizational tool modeled after Evernote. It is built with Ruby on Rails on the backend, a PostgreSQL database, and React.js/Redux on the frontend.

![Splash page](https://github.com/alexinachong/AlexiNote/blob/master/app/assets/images/AlexiNote_Splash_Screenshot_020918_Resized.png)

## Features
The primary features of AlexiNote are notes and notebooks.

### Rich-text Editing
AlexiNote implements React-Quill, a React component wrapping Quill.js, an open-source WYSIWYG text editor.

A user can continue to update a note after its initial creation. As soon as they save a note, its changes will render on the sidebar preview of their notes, along with an updated human-friendly relative time timestamp.

```javascript
class NoteShow extends React.Component {

  ...

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(newProps) {
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

  ...

  render () {
    const note = this.props.note;
    if (!note) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="note-show-container">
          <form onSubmit={this.handleSubmit}>
            <div className="note-show-header">
            <label>
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="Title your note"
                  onChange={this.update('title')} />
              </label>
              <input type="submit" value="Save" />
            </div>

            <ReactQuill
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={TextEditor.modules}
              formats={TextEditor.formats}
              placeholder={this.props.placeholder}
             />

          </form>
        </div>
      </div>
    );
  }
}

export default NoteShow;
```

![Rich-text Editing](https://github.com/alexinachong/AlexiNote/blob/master/app/assets/images/AlexiNote_Rich_Text_Editing_020918.png)


### Notebook & Note Previews
A user can preview an unformatted version of their notes without having to click into each note separately. They may also choose to view all of their notes for a particular notebook, or all of their notes regardless of notebook.

```javascript
const NotebookShowIndexItem = ({ note, notebookId, fetchNotesByNotebook, deleteNote, fetchNote }) => {
  let htmlCode = note.description;
  let div = document.createElement("div");
  div.innerHTML = htmlCode;
  let text = div.textContent || div.innerText || "";

  return (
    <div>
      <Link to={`/notebooks/${note.notebook_id}/notes/${note.id}`}>
        <div className="note-preview">
          <section className="note-preview-header">
            <section className="note-preview-title">
              {note.title}
            </section>
            <section className="notebook-preview-buttons">
              <img onClick={() => deleteNote(note.id)} src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/evernote_delete_trash_icon.png" />
            </section>
          </section>

          <br />
          <section className="note-time">
            {note.time_ago} ago
          </section>

          <br />
          <section className="note-preview-description">
            {text}
          </section>
        </div>
      </Link>
    </div>
  );
};

export default NotebookShowIndexItem;
```

![Note Previews](https://github.com/alexinachong/AlexiNote/blob/master/app/assets/images/AlexiNote_Note_Preview_Panels_020918.png)


## Future Features
Looking ahead, I would like to implement the following features:
+ Tags
+ Auto-save
+ Search
+ Favorites/Shortcuts
