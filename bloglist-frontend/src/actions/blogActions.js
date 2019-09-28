import blogService from '../services/blogs'

export const addBlog = content => {};

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
