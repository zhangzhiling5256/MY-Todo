import React,{Component} from "react"
import {connect} from "react-redux"
import action from "../store/action"
class Heade extends Component{
  constructor(props){
    super(props)
  }
  render(){
    
    let {data}=this.props,
    len=data.filter(item=>(parseFloat(item['state'])===0)).length;
    return(
      <div className="panel-heading">
      <h3 className="panel-title">
      亲^_^ 您还有<span className="count">{len}</span>件事未完成哦~
      </h3>
      <input type="text" className="form-control" placeholder='please enter thetasks to be completed' onKeyUp={this.keyUp}/>
      </div>
    )
  }
  keyUp=ev=>{
       if(ev.keyCode===13){
         let value=ev.target.value.trim();
         if(value.length===0)return;
         this.props.add({
           name:value,
           state:0
         });
         ev.target.value="";
       }
  }
}
export default connect(state=>({...state.todo}),action.todo)(Heade);