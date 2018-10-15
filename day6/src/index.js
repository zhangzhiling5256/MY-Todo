import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux'
import "bootstrap/dist/css/bootstrap.css"
import "./static/css/todo.css"
import Heade from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
import store from "./store"
ReactDOM.render(
<Provider store={store}>
  <main className="panel panel-default">
    <Heade></Heade>
    <Body></Body>
    <Footer></Footer>
</main>
</Provider>,
 document.getElementById('root'));
