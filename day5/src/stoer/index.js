import {createStore} from "redux"
import reducer from "./reduer"

let store=createStore(
  reducer
)
export default store;