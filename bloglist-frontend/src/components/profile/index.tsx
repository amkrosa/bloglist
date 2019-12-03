import { connect } from "react-redux";
import { getCurrentUser } from "../../store/user/userActions";
import Profile from "./Profile";

const mapStateToProps = state => {
  return {
    user: getCurrentUser(state)
  };
};

export default connect(mapStateToProps)(Profile);
