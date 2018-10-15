import {combineReducers} from "redux"
import Vote from "./VOte"
import Spare from "./Spare"
let reducer=combineReducers({
  Vote,
  Spare
})
export default reducer;
