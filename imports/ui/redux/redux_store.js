import statechange from "./reducer";
import { createStore } from "redux";

let store = createStore(statechange);
export default store;
