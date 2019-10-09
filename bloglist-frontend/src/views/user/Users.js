import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Box from "../common/Box";

const Users = props => {
  return (
    <Box>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blogs</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default withRouter(connect(mapStateToProps)(Users));
