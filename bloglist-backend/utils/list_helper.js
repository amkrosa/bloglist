const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.length!=0 ? blogs.reduce((sum, blog)=>sum+blog.likes, 0) : 0

const favouriteBlog = (blogs) => blogs.length!=0 ? blogs.sort((a,b) => a.likes - b.likes)[blogs.length-1] : 0

const mostBlogs = (blogs) =>{
  let result=[]
  blogs.forEach((blog) => {
    result.find(item=>item.author===blog.author) ? 
      result.find(item=>item.author===blog.author).blogs+=1 : 
      result.push({author: blog.author, blogs: 1})
  })

  return result.length>0 ? result.reduce((max, author) => max.blogs > author.blogs ? max : author) : 0
}

const mostLikes = (blogs) =>{
  let result=[]
  blogs.forEach((blog) => {
    result.find(item=>item.author===blog.author) ? 
      result.find(item=>item.author===blog.author).likes+=blog.likes : 
      result.push({author: blog.author, likes: blog.likes})
  })

  return result.length>0 ? result.reduce((max, author) => max.likes > author.likes ? max : author) : 0
}

  



module.exports = {
  dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes
}