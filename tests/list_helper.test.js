const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []
  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]
const listWithMultipleBlogs = [
  {
    _id: '5a422aa71b54a676232d17f8',
    title: 'blog 1',
    author: 'author 1',
    url: 'some link',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676231d17f8',
    title: 'blog 2',
    author: 'author 1',
    url: 'some link 2',
    likes: 1,
    __v: 0
  },
  {
    _id: '5a422aa71b54a673234d17f8',
    title: 'blog 3',
    author: 'author 3',
    url: 'some link 3',
    likes: 3,
    __v: 0
  },
]
const listWithZeroBlogs = []


describe('total likes in an array of blogs', ()=>{
  
  
  test('empty array equals zero', ()=>{
    const result = listHelper.totalLikes(listWithZeroBlogs)
    expect(result).toBe(0)
  })

  test('array with size of one equals likes of itself', ()=>{
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('array with size >2 calculates correctly', ()=>{
    const result = listHelper.totalLikes(listWithMultipleBlogs)
    expect(result).toBe(9)
  })
})

describe('blog with highest likes value in array', ()=>{

  test('empty array equals zero', ()=>{
    const result = listHelper.favouriteBlog(listWithZeroBlogs)
    expect(result).toBe(0)
  })

  test('array with size of one equals likes of itself', ()=>{
    const result = listHelper.favouriteBlog(listWithOneBlog)
    expect(result).toEqual({
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    })
  })

  test('array with size >2 calculates correctly', ()=>{
    const result = listHelper.favouriteBlog(listWithMultipleBlogs)
    expect(result).toEqual(
      {
        _id: '5a422aa71b54a676232d17f8',
        title: 'blog 1',
        author: 'author 1',
        url: 'some link',
        likes: 5,
        __v: 0
      })
  })

})

describe('authors with highest count of written blogs', ()=>{
  
  test('empty array equals zero', ()=>{
    const result = listHelper.mostBlogs(listWithZeroBlogs)
    expect(result).toBe(0)
  })

  test('array with size of one equals one', ()=>{
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      blogs: 1
    })
  })

  test('array with size >2 calculates correctly', ()=>{
    const result = listHelper.mostBlogs(listWithMultipleBlogs)
    expect(result).toEqual(
      {
        author: 'author 1',
        blogs: 2
      })
  })

})

describe('authors with highest count of likes', ()=>{
  
  test('empty array equals zero', ()=>{
    const result = listHelper.mostLikes(listWithZeroBlogs)
    expect(result).toBe(0)
  })

  test('array with size of one equals one', ()=>{
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 5
    })
  })

  test('array with size >2 calculates correctly', ()=>{
    const result = listHelper.mostLikes(listWithMultipleBlogs)
    expect(result).toEqual(
      {
        author: 'author 1',
        likes: 6
      })
  })

})