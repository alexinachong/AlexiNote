import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotebooksIndexItem from './notebooks_index_item';
import Modal from 'react-modal';

class NotebooksIndex extends React.Component {
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
					<section className="notebooks-overlay-title">NOTEBOOKS</section>
					<section className="notebooks-overlay-create">
						<Link to="/notebooks/new" className="">
							<img src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/evernote_create_notebook_icon.png" />
						</Link>
					</section>
				</section>

				<section className="notebooks-overlay-nbs-list">
					<section className="notebook-items">
						{this.props.notebooks.map(notebook => (
							<NotebooksIndexItem
								key={notebook.id}
								deleteNotebook={this.props.deleteNotebook}
								notebook={notebook}
								removePanel={this.props.removePanel}
							/>
						))}
					</section>
				</section>
			</div>
		);
	}
}

export default NotebooksIndex;
