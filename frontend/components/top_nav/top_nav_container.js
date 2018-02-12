import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import TopNav from './top_nav';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
