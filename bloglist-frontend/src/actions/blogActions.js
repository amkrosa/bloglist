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
    const newComment = await blogService.comment(blog.id, comment);
    console.log(newComment)
    const newBlog = {...blog, comments: blog.comments.concat(newComment)}
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

/*export const initializeComments = (blog) => {
  return async dispatch => {
      const comments = await blogService.getComments(blog.id);
      console.log(comments)
      const newBlog = {...blog, comments}
      dispatch({
        type: "INIT_COMMENTS",
        data: newBlog
      });
    }
  };*/

//selectors

export const getBlogById = (state, id) =>
  state.blogs.filter(blog => blog.id === id)[0];

export const getBlogsMostPopular = (state, n) => {
  return state.blogs.blogs.sort((a,b)=>a.likes-b.likes).reverse().slice(0,n)
}

export const getBlogsRecentlyAdded = (state, n) => {
  return state.blogs.blogs.reverse().slice(0,n)
}

