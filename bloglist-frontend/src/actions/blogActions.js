import blogService from '../services/blogs'

export const addBlog = content => {
  return async dispatch => {
    const blog = await blogService.create(content)
    dispatch({
      type: 'ADD_BLOG',
      data: blog
    })
  }
};

export const deleteBlog = id => {};

export const updateBlog = id => {};

export const addVote = id => {};

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}
