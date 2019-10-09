const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

blogsRouter.get("/", async (request, response, next) => {
  try {
    const blogs = await Blog.find({}).populate("user");
    response.json(blogs.map(blog => blog.toJSON()));
  } catch (e) {
    next(e);
  }
});

blogsRouter.get("/:id", async (request, response, next) => {
  try {
    const requestedBlog = await Blog.findById(request.params.id);
    requestedBlog
      ? response.json(requestedBlog.toJSON())
      : response.status(404).end();
  } catch (e) {
    next(e);
  }
});

blogsRouter.get("/:id/comments", async (request, response, next) => {
  try {
    const requestedBlog = await Blog.findById(request.params.id);
    requestedBlog
      ? response.json(requestedBlog.toJSON().comments)
      : response.status(404).end();
  } catch (e) {
    next(e);
  }
});

blogsRouter.post("/", async (request, response, next) => {
  const token = request.token;
  try {
    const body = request.body;
    const decodedToken = token
      ? jwt.verify(token, process.env.SECRET)
      : undefined;
    if (!token || !decodedToken.id) {
      return response.status(401).json({
        error: "token missing or invalid"
      });
    }
    if (!body.title || !body.url) {
      return response.status(400).end();
    }
    const user = await User.findOne({ username: body.user });
    const blog = new Blog({
      title: body.title,
      author: body.author,
      content: body.content,
      url: body.url,
      likes: body.likes | 0,
      user: user._id
    });
    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();
    response.status(201).json(savedBlog.toJSON());
  } catch (e) {
    next(e);
  }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  const decodedToken = request.token
    ? jwt.verify(request.token, process.env.SECRET)
    : undefined;
  const blog = await Blog.findById(request.params.id);
  console.log("blog: " + blog);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({
      error: "token missing or invalid"
    });
  }
  if (blog.user.toString() === decodedToken.id.toString()) {
    await Blog.findByIdAndDelete(request.params.id);
    response.status(204).end();
  } else {
    return response.status(401).json({
      error: "invalid user"
    });
  }
});

blogsRouter.put("/:id", async (request, response, next) => {
  try {
    const body = request.body;
    const blogBeforeUpdate = await Blog.findById(request.params.id);
    const blog = {
      title: body.title || blogBeforeUpdate.title,
      author: body.author || blogBeforeUpdate.author,
      url: body.url || blogBeforeUpdate.url,
      likes: body.likes || 0
    };
    await Blog.findByIdAndUpdate(request.params.id, blog, {
      new: true
    });
    response.status(200).end();
  } catch (e) {
    next(e);
  }
});

blogsRouter.post("/:id/comments", async (request, response, next) => {
  try {
    const body = request.body;
    const blogBeforeUpdate = await Blog.findById(request.params.id);
    const blog = {
      ...blogBeforeUpdate.toObject(),
      comments: blogBeforeUpdate.comments.concat(body.comment)
    };
    console.log(blog);
    await Blog.findByIdAndUpdate(request.params.id, blog, {
      new: true
    });
    response.status(200).end();
  } catch (e) {
    next(e);
  }
});

module.exports = blogsRouter;
