import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotebookCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.state = this.props.notebook;
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.notebook);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  // Note: first 'notebook' below is payload key of receiveNotebook action; second is object returned by value of payload key
  handleSubmit(e) {
    e.preventDefault();
    this.props.createNotebook(this.state).then((response) => this.props.history.push('/notebooks'));
  }

  cancelForm(e) {
    e.preventDefault();
    this.props.history.push('/notebooks');
  }

  render() {
    return (
      <div className="notebook-create-form-outer-container">
        <div className="notebook-create-form-inner-container">

          <section className="notebook-create-form-header-logo">
            <img src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/evernote_notebook_icon.png" />
          </section>
          <section className="notebook-create-form-header-text">CREATE NOTEBOOK</section>
          <div className="notebook-create-form-hr"></div>

          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                value={this.state.title}
                placeholder="Title your notebook"
                onChange={this.update('title')} />
            </label>

            <input type="submit" value="Create notebook" />
            <button onClick={() => this.cancelForm()}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NotebookCreateForm;
