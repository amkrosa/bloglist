import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../store/auth/authActions";
import { setNotification } from "../../store/notification/notificationActions";

const mapStateToProps = (state: any) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  login,
  setNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
