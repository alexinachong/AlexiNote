import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotebookUpdateForm extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateNotebook(this.state).then((response) => this.props.history.push(`/notebooks/${this.props.notebook.id}`));
  }

  cancelForm(e) {
    e.preventDefault();
    this.props.history.push('/notebooks');
  }

  render() {
    return (
      <div className="notebook-update-form-container">
        <section className="notebook-update-form-header-logo">img</section>
        <section className="notebook-update-form-header-text">NOTEBOOK INFO</section>
        <div className="notebook-create-form-hr"></div>

        <form onSubmit={this.handleSubmit}>
          <label>Overview
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <button onClick={() => this.props.deleteNotebook(this.props.notebook.id)}>Delete notebook</button>

          <button onClick={() => this.cancelForm()}>Cancel</button>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default NotebookUpdateForm;
