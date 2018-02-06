import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotebookCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.createNotebook(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="notebook-create-form-container">
        <section className="notebook-create-form-header-logo">img</section>
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
        </form>
      </div>
    );
  }
}

export default NotebookCreateForm;
