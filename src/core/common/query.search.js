export const buildSearchQuery = (searchValue, fields) => {
  let searchArray = [];
  fields.forEach((element) => {
    searchArray.push({ [element]: { $regex: searchValue } });
  });
  return { $or: searchArray };
};
