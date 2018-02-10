import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notebookId: null
    };
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    console.warn(this.props);
    console.info(this.state);
    const newUrlArr = newProps.location.pathname.split("/");
    const newNotebookId = newUrlArr[newUrlArr.length - 1];
    if ((newNotebookId !== this.props.notebookId) && (!isNaN(parseInt(newNotebookId))) && (typeof parseInt(newNotebookId) === 'number')) {
      this.setState({ notebookId: newNotebookId });
    }
  }

  render() {
    const notebookId = (!this.state.notebookId && (typeof parseInt(this.props.notebookId) === 'number')) ? this.props.notebookId : this.state.notebookId;

    return (
      <div>
        <nav className="left-nav-outer-container">
          <section className="left-nav-inner-container">
            <section className="left-nav-logo">
              <img src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/AlexiNote_Book_Icon_Green_Transparent_BG_No_WS_84x72.png" />
            </section>

            <section className="left-nav-buttons">
              <ul>
                <li><NavLink to={`/notebooks/${notebookId}/notes/new`}>New Note</NavLink></li>
                <li><NavLink to="/notes">Notes</NavLink></li>
                <li><NavLink to="/notebooks">Notebooks</NavLink></li>
              </ul>
            </section>
            <section className="left-nav-logout">
              <button onClick={() => this.props.logout()}>Log out</button>
            </section>
          </section>


        </nav>
      </div>
    );
  }
}

export default LeftNav;
