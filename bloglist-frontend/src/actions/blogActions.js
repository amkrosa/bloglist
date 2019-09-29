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

export const deleteBlog = id => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: {id}
    })
  }
};

export const updateBlog = id => {};

export const addVote = content => {
  return async dispatch => {
    const newObject = {
      ...content,
      likes: content.likes+1
    }
    await blogService.update(content.id, newObject)
    dispatch({
      type: 'ADD_VOTE',
      data: newObject
    })
  }
};

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}
