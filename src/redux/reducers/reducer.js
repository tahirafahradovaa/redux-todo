const initialState = [
  {
    todo: "",
    id: null,
  },
];

function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      let filtered = state.filter((q) => q.todo);

      return [...filtered, action.payload];

    case "REMOVE":
      let filteredToDo = state.filter((q) => q.id != action.payload.id);
      return [...filteredToDo];
  }
}
export default toDoReducer;
