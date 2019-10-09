import blogService from "../services/blogs";

export const addBlog = content => {
  return async dispatch => {
    const blog = await blogService.create(content);
    dispatch({
      type: "ADD_BLOG",
      data: blog
    });
  };
};

export const deleteBlog = id => {
  return async dispatch => {
    await blogService.remove(id);
    dispatch({
      type: "DELETE_BLOG",
      data: { id }
    });
  };
};

export const updateBlog = id => {};

export const addVote = blog => {
  return async dispatch => {
    const newObject = {
      ...blog,
      likes: blog.likes + 1
    };
    await blogService.update(blog.id, newObject);
    dispatch({
      type: "ADD_VOTE",
      data: newObject
    });
  };
};

export const addComment = (blog, comment) => {
  return async dispatch => {
    const newBlog = {
      ...blog,
      comments: blog.comments.concat(comment)
    };
    await blogService.update(blog.id, newBlog);
    dispatch({
      type: "ADD_COMMENT",
      data: newBlog
    });
  };
};

export const initializeBlogs = () => {
  return async dispatch => {
    dispatch({
      type: "INIT_BLOGS_PENDING"
    });
    try {
      const blogs = await blogService.getAll();
      dispatch({
        type: "INIT_BLOGS_SUCCESS",
        data: blogs
      });
    } catch (e) {
      dispatch({
        type: "INIT_BLOGS_FAILURE",
        error: e
      });
    }
  };
};

//selectors

export const getBlogById = (state, id) =>
  state.blogs.filter(blog => blog.id === id)[0];
