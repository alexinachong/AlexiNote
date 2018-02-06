import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotebooksOverlayIndexItem from './notebooks_overlay_index_item';

class NotebooksOverlay extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    return (
      <div className="notebooks-overlay-container">
        <section className="notebooks-overlay-header">
          <section className="notebooks-overlay-title">
            NOTEBOOKS
          </section>
          <section className="notebooks-overlay-create">
            CREATE
          </section>
        </section>

          <section className="notebooks-overlay-nbs-list">
            <ul>
              {
                this.props.notebooks.map(notebook => (
                  <NotebooksOverlayIndexItem
                    key={notebook.id}
                    deleteNotebook={this.props.deleteNotebook}
                    notebook={notebook} />
                ))
              }
            </ul>
          </section>
      </div>
    );
  }

}

export default NotebooksOverlay;
