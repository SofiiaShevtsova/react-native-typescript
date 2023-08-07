export const filter = (query, array) =>
  array.filter(item => item.name.toLowerCase().search(query) !== -1);
