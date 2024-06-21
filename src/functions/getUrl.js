export const getUrl = (page) => {
  const postsUrlLimited = `https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`;
  const postsUrl = `https://jsonplaceholder.typicode.com/posts/`;
  return { postsUrl, postsUrlLimited };
};
