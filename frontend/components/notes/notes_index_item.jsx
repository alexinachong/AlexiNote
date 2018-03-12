import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NotesIndexItem = ({
	note,
	currentNotePath,
	deleteNote,
	fetchNote,
	fetchNotes
}) => {
	let htmlCode = note.description;
	let div = document.createElement('div');
	div.innerHTML = htmlCode;
	let text = div.textContent || div.innerText || '';

	return (
		<div>
			<NavLink to={`/notes/${note.id}`}>
				<div className="note-preview">
					<section className="note-preview-header">
						<section className="note-preview-title">{note.title}</section>
						<section className="notebook-preview-buttons">
							<img
								onClick={() => deleteNote(note.id)}
								src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/evernote_delete_trash_icon.png"
							/>
						</section>
					</section>

					<br />
					<section className="note-time">{note.time_ago} ago</section>

					<br />
					<section className="note-preview-description">{text}</section>
				</div>
			</NavLink>
		</div>
	);
};

export default NotesIndexItem;
