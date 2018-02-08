import React from 'react';
import { Link } from 'react-router-dom';

// class NotebooksIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       notebook: this.props.notebook
//     };
//
//     this.deleteNotebook = this.deleteNotebook.bind(this);
//   }
//
//   noteCounts() {
//     if (this.props.notebook && this.props.notebook.numNotes === 1) {
//       return <p>{this.props.notebook.numNotes} note</p>;
//     } else if (this.props.notebook) {
//       return <p>{this.props.notebook.numNotes} notes</p>;
//     } else {
//       return <p>0 notes</p>;
//     }
//   }
//
//   render() {
//     return (
//       <li>
//         <div>
//           <Link to={`/notebooks/${this.state.notebook.id}`}>
//             {this.state.notebook.title}
//           </Link>&nbsp;
//           <button onClick={() => deleteNotebook(this.state.notebook.id)}>Delete</button>
//         </div>
//       </li>
//     );
//   }
//
// }


const NotebooksIndexItem = ({ notebook, deleteNotebook }) => {
  return (
    <li>
      <div>
        <Link to={`/notebooks/${notebook.id}`}>
          {notebook.title}
        </Link>&nbsp;
        <button onClick={() => deleteNotebook(notebook.id)}>Delete</button>
      </div>
    </li>
  );
};

export default NotebooksIndexItem;
