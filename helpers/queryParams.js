export const normalizeFilter = (query = {}) => {
  let filter = {};
  if (query.category) {
    filter = { ...filter, category: query.category.split(',') };
  }
  return filter;
}
