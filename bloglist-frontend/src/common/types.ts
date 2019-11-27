export interface User {
  username: String;
  name: String;
  blogs: Blog[];
  comments: Comment[];
}

export interface Comment {
  id: String;
  content: String;
  likes: number;
  date: Date;
  user: User;
  blog: Blog;
}

export interface Blog {
  id: String;
  author: String;
  url: String;
  content: String;
  likes: number;
  date: Date;
  user: User;
  comments: Comment[];
}
