interface Iblog {
  url: string;
  description: string;
}

interface Iblogs {
  [key: string]: Iblog;
}

const blogs: Iblogs = {
};

export default blogs;
