import { connect } from 'react-redux';
import LeftNav from './left_nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);
