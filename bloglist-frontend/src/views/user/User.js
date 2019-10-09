import React from "react";

import Box from "../common/Box";

const User = ({ user }) => {
  console.log(user);
  return (
    <Box>
      <h3>User {user.name}</h3>
      <h4>added blogs: </h4>
      <ul>
        {user.blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </Box>
  );
};

export default User;
