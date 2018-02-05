import { connect } from 'react-redux';
import { fetchNotebooks, createNotebook, deleteNotebook } from '../../actions/notebook_actions';
import NotebooksOverlay from './notebooks_overlay';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksOverlay);
