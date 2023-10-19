export const getPostCollection = (posts) => {
  return posts.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item.userId)) {
      acc[item.userId] = [];
    }
    acc[item.userId].push(item);
    return acc;
  }, {});
};
