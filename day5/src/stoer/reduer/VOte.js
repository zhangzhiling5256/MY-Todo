import * as TYPE from "../proptypes"
export default function Vote(state={title:"",n:0,m:0},action){
      switch(action.type){
        case TYPE.VOTE_Support:
        state={...state,n:state.n+1}
        break;
        case TYPE.VOTE_Opposition:
        state={...state,m:state.m+1}
        break;
        case TYPE.VOTE_INIT:
        let {title="入职腾讯，月薪20K",n=100,m=0}=action;
        state={...state,title,n,m}
      }
 return state;
} 