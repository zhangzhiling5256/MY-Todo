import * as TYPES from "../action-types"
let todo={
    add(payload){
      return{
        type:TYPES.TODO_ADD,
        payload
      }
    },
    fliter(text){
    return{
       type:TYPES.TODO_FILTER,
       text
    }
    },
    updataState(taskId,newState){
      return{
        type:TYPES.TODO_UPDATA_STATE,
        taskId,
        newState
      }
    },
    remove(taskId){
    return{
      type:TYPES.TODO_DELETE,
      taskId
    }
    }
}
export default todo;