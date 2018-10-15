import React from 'react';
import {Provider,connect} from "react-redux"
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import Header from "./component/header"
import Footer from "./component/footer"
import store from "./stoer"
ReactDOM.render(
<Provider store={store}>
  <section className="panel panel-default" style={{width:"50%",margin:"20px auto"}}>
  <Header></Header>
  <Footer ></Footer>
  </section>
  </Provider>
, document.getElementById('root'));

