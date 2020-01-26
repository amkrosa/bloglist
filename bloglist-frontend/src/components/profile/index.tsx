import { connect } from 'react-redux';
import { getCurrentUser } from '../../store/user/userActions';
import Profile from './Profile';

const mapStateToProps = (state: any) => {
  return {
    user: getCurrentUser(state),
  };
};

export default connect(mapStateToProps)(Profile);
