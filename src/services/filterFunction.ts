export const filter = (query: string, array: any[]): any[] =>
  array.filter(item => item.title.toLowerCase().search(query) !== -1);
