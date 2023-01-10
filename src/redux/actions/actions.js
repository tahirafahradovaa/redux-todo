export const add = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const remove = (item) => {
  return {
    type: "REMOVE",
    payload: item,
  };
};
