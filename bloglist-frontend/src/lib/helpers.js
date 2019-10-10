export const replaceItem = (item, index, array) => {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
};

export const replaceItemById = (item, id, array) =>
  replaceItem(item, array.findIndex(i => i.id === item.id), array);

export const generateId = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
