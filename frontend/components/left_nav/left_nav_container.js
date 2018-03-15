import { connect } from 'react-redux';
import LeftNav from './left_nav';
import { logout } from '../../actions/session_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	return {
		notebookId: Object.keys(state.entities.notebooks).map(el => parseInt(el))[0]
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	logout: () => dispatch(logout()),
	fetchNotebooks: () => dispatch(fetchNotebooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);
