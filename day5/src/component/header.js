import React,{Component} from "react"
import {connect} from "react-redux"
import action from "../stoer/action"

class Header extends Component{
/* constructor(props){
  super(props)
   let stateStore=this.props.store.getState().Vote
   this.state={
     ...stateStore
   }
}
componentWillMount(){
    this.props.store.dispatch(action.Vote.Init({
      title:"入职百度，月薪29K",
      n:10000,
      m:0
    }))
    let stateStore=this.props.store.getState().Vote
      this.setState({...stateStore})
}
componentDidMount(){
  this.props.store.subscribe(()=>{
    let stateStore=this.props.store.getState().Vote
      this.setState({...stateStore})
  })
} */
constructor(props){
  super(props)
}


componentWillMount(){
  this.props.Init({
    title:"入职百度,月薪20k",
    n:100,
    m:0
  })
}
render(){
  let {title,n,m}=this.props;
  return(<div className="panel panel-default">
         <div className="panel-heading">  
          <h3 className="panel-title">{title}</h3>
         </div>
         <div className="panel-body">
         支持人数:<span>{n}</span>
         <br/>   <br/>
         反对人数:<span>{m}</span>
         </div>
  </div>)
}
}
/* let  mapStateToProps=state=>{
     return{
       ...state.Vote
     }
}
let  mapDispatchToProps=dispatch=>{
     return{
       Init(initDate){
        dispatch(action.Vote.Init(initDate))
       }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header) */
export default connect(state=>({...state.Vote}), action.Vote)(Header)
