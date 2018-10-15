import React,{Component} from "react"
import {connect} from "react-redux"
import action from "../stoer/action"
 class Footer extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {Support,Opposition}=this.props
    return(<div className="panel-footer">
           <button className="btn btn-success" onClick={Support}>支持</button>
           &nbsp;&nbsp;&nbsp;&nbsp;
           <button className="btn btn-danger" onClick={Opposition}>反对</button>
    </div>)
  }
}
export default connect(state=>({...state.Vote}),action.Vote)(Footer)