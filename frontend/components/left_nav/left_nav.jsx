import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="left-nav-outer-container">
          <section className="left-nav-inner-container">
            <section className="left-nav-logo">
              <img src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/AlexiNote_Book_Icon_Green_Transparent_BG_No_WS_84x72.png" />
            </section>

            <section className="left-nav-buttons">
              <ul>
                <li><NavLink to={`/notebooks/${this.props.firstNotebookId}/notes/new`}>New Note</NavLink></li>
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
