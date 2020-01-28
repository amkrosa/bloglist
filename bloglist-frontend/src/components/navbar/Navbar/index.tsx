import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../../store/auth/authActions';

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToprops = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToprops)(Navbar);
