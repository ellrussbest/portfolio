interface Iblog {
  url: string;
  description: string;
}

interface Iblogs {
  [key: string]: Iblog;
}

const blogs: Iblogs = {
  "01": {
    url: "https://reasonforcpp.blogspot.com/2024/11/why-you-should-always-consider-c.html",
    description: "Overloading the C++ std::ostream (<<) operator",
  },
};

export default blogs;
