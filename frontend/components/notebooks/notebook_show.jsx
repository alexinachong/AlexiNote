import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotebookShowIndexItem from './notebook_show_index_item';

class NotebookShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
  }



  render () {
    const notebook = this.props.notebook;
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
            notebook.note_ids.length notes
          </section>

        </section>
      </div>
    );
  }

}

export default NotebookShow;
