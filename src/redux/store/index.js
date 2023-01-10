import { createStore } from "redux";
import toDoReducer from "../reducers/reducer";

export const store = createStore(toDoReducer);
