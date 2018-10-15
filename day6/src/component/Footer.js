import React,{Component} from "react"
import {connect} from "react-redux"
import action from "../store/action"
class Footer extends Component{
  constructor(props){
    super(props)
    this.showData=[{text:"全部",flag:"all"},{text:"已完成",flag:"complete"},{text:"未完成",flag:"uncomplete"}]
  }
  render(){
    let {flag}=this.props
    return(
      <div className="panel-footer">
           <ul className="nav nav-pills" onClick={this.updataFiter}>
               {this.showData.map((item,index)=>{
                 let {text,flag:itemFlag}=item;
                 return<li key={index} className={itemFlag === flag ? "presentation active":"presentation"}>
                 <a href="javascript:;" flag={itemFlag}>{text}</a>
                 </li>
               })}
           </ul> 
      </div>
    )
  }
  updataFiter=ev=>{
      let target=ev.target,
      tarTag=target.tagName;
      if(tarTag==="LI"){
        target=target.firstElementChild;
        tarTag=target.tagName;
      }
      if(tarTag==="A"){
        let text=target.getAttribute('flag')
        if(this.props.flag===text){
          return;
        }
        this.props.fliter(text);
      }
  }
}
export default connect(state=>({...state.todo}),action.todo)(Footer)