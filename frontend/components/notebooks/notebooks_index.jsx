import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotebooksOverlayIndexItem from './notebooks_overlay_index_item';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class NotebooksIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="notebooks-overlay-container">

        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

        <section className="notebooks-overlay-header">
          <section className="notebooks-overlay-title">
            NOTEBOOKS
          </section>
          <section className="notebooks-overlay-create">
            <Link to="/notebooks/new" className="">CREATE</Link>
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

export default NotebooksIndex;
