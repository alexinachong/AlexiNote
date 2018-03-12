import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import NotesIndexItem from './notes_index_item';

class NotesIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchNotes();
	}

	noteCounts() {
		if (this.props.notes.length === 1) {
			return <p>{this.props.notes.length} note</p>;
		} else {
			return <p>{this.props.notes.length} notes</p>;
		}
	}

	render() {
		const notes = this.props.notes;
		if (!notes) {
			return <div>Loading...</div>;
		}

		return (
			<div className="note-sidebar-container">
				<section className="notes-index-header">
					<section className="notes-index-title">NOTES</section>
				</section>

				<section className="note-sidebar-list">
					<section className="note-sidebar-list-count">
						{this.noteCounts()}
					</section>
					<section className="note-sidebar-list-items">
						<section className="items">
							{this.props.notes.map(note => (
								<NotesIndexItem
									key={note.id}
									fetchNotes={this.props.fetchNotes}
									deleteNote={this.props.deleteNote}
									fetchNote={this.props.fetchNote}
									note={note}
								/>
							))}
						</section>
					</section>
				</section>
			</div>
		);
	}
}

export default NotesIndex;
