export const filter = (query: string, array: any[]): any[] =>
  array.filter(item => item.name.toLowerCase().search(query) !== -1);
