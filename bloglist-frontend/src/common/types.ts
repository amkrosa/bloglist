export interface User {
  id?: string;
  username: string;
  name: string;
  blogs?: Blog[];
  comments?: Comment[];
  password?: string;
}

export interface Comment {
  id?: string;
  content: string;
  likes: number;
  date?: Date;
  user?: User;
  blog?: Blog;
}

export interface Blog {
  id?: string;
  author: string;
  url: string;
  content: string;
  likes: number | 0;
  date?: Date;
  user?: User;
  comments?: Comment[];
}
