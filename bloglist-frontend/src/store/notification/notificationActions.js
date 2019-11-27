export const setNotification = (content, category) => {
  return{
    type: 'SET_NOTIFICATION',
    data: {
      status: true,
      content,
      category
    }
  }
};
export const clearNotification = () => {
  return{
    type: 'CLEAR_NOTIFICATION',
    data: {
    status: false,
    content: '',
    category: ''
  }
  }
};

export const setTimedNotification = (content, category, time) => {
  return async dispatch => {
    setNotification(content, category)
    setTimeout(()=>clearNotification,time*1000)
  }
}
