import * as TYPES from "../action-types"
export default function todo(state={
  data:[],
  flag:'all'
},action){
  
  state=JSON.parse(JSON.stringify(state))
  switch (action.type){
         case TYPES.TODO_ADD:
          let {payload}=action;
          payload.id=state.data.length===0?1:(parseFloat(state.data[state.data.length-1]["id"])+1);
          state.data.push(payload);
          break;
          case TYPES.TODO_FILTER:
          state.flag=action.text;
          break;
          case TYPES.TODO_UPDATA_STATE:
          let {taskId,newState}=action,
          item=state.data.find(item=>item.id===taskId);
          if(item){
            item.state=newState;
          }
          break;
          case TYPES.TODO_DELETE:
          let {taskId:taskId_del}=action;
          state.data=state.data.filter(item=>item.id !==taskId_del);
          break;
  }
  return state;
}