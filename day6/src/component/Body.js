import React,{Component} from "react"
import {connect} from "react-redux"
import action from "../store/action"
class Body extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {data,flag}=this.props;
    data=data.filter(item=>{
      let {state}=item;
      state=parseFloat(state);
      if(flag==='complete')  return parseFloat(item.state)===1;
      if(flag==="uncomplete") return state===0;
      return true;
    })
    return(
      <div className="panel-boody">
           <ul className="list-group">
           {data.map((item,index)=>{
             let {id,name,state}=item;
             state=parseFloat(state)
             return <li key={index} className="list-group-item">
           <input type="checkbox" name="todo" checked={!!state} onChange={ev=>{
             let newsState=ev.target.checked?1:0;
             this.props.updataState(id,newsState)
           }}/>
           <span className={state===1?"complete":null}>{name}</span>
           <a href="javascript:;" className="btn-danger" onClick={ev=>{
                  let isOk=window.confirm("确定删除");
                  if(isOk){
                    this.props.remove(id);
                  }
           }}>删</a>
           </li>
           })}
           
           </ul>
      </div>
    )
  }
}
export default  connect(state=>({...state.todo}),action.todo)(Body);