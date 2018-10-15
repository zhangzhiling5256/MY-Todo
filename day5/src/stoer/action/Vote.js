import * as TYPE from "../proptypes"

let Vote={
  Support(){
    return{
      type:TYPE.VOTE_Support
    }
  },
  Opposition(){
    return{
      type:TYPE.VOTE_Opposition
    }
  },
  Init(initData){
    return{
      type:TYPE.VOTE_INIT,
      ...initData
    }
  }
}
export default Vote;