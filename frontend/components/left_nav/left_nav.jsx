import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';

class LeftNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notebookId: null,
			isPaneOpen: false,
			isPaneOpenLeft: false
		};
		this.newNotebook = this.newNotebook.bind(this);
	}

	componentDidMount() {
		this.props.fetchNotebooks();
		Modal.setAppElement(this.el);
	}

	componentWillReceiveProps(newProps) {
		const newUrlArr = newProps.location.pathname.split('/');
		console.log(newUrlArr);
		// const newNotebookId = newUrlArr[newUrlArr.length - 1];
		let newNotebookId;
		if (newUrlArr[1] === 'notebooks') {
			newNotebookId = newUrlArr[2];
		}
		// const newNotebookId = newUrlArr[2];
		if (
			newNotebookId !== this.props.notebookId &&
			!isNaN(parseInt(newNotebookId)) &&
			typeof parseInt(newNotebookId) === 'number'
		) {
			this.setState({ notebookId: newNotebookId });
		}
	}

	newNotebook() {
		const notebookId =
			!this.state.notebookId &&
			typeof parseInt(this.props.notebookId) === 'number'
				? this.props.notebookId
				: this.state.notebookId;
		console.warn(this.props);
		if (this.props.location.pathname.slice(-3) !== 'new') {
			return (
				<NavLink to={`/notebooks/${notebookId}/notes/new`}>
					<i className="fas fa-plus-circle" />
				</NavLink>
			);
		}
		return <i className="fas fa-plus-circle" />;
	}

	render() {
		const notebookId =
			!this.state.notebookId &&
			typeof parseInt(this.props.notebookId) === 'number'
				? this.props.notebookId
				: this.state.notebookId;

		return (
			<div>
				<nav className="left-nav-outer-container">
					<section className="left-nav-inner-container">
						<section className="left-nav-logo">
							<img src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/AlexiNote_Book_Icon_Green_Transparent_BG_No_WS_84x72.png" />
						</section>

						<section className="left-nav-buttons">
							<ul>
								<li>{this.newNotebook()}</li>
								<li>
									<NavLink to="/notes">
										<i className="fas fa-file-alt" />
									</NavLink>
								</li>
								<li>
									<a
										onClick={() =>
											this.setState({
												isPaneOpenLeft: !this.state.isPaneOpenLeft
											})
										}
									>
										<i className="fas fa-book" />
									</a>
								</li>
							</ul>
						</section>
						<SlidingPane
							isOpen={this.state.isPaneOpenLeft}
							from="left"
							width="460px"
							onRequestClose={() => this.setState({ isPaneOpenLeft: false })}
						>
							<NotebooksIndexContainer
								removePanel={() => this.setState({ isPaneOpenLeft: false })}
							/>
						</SlidingPane>
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
