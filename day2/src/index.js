import React from 'react';
import ReactDOM from 'react-dom';
import "./conponents/index.css"
import Slider from './conponents/Slider';
import a from "./images/1.jpg"
import b from "./images/2.jpg"
import c from "./images/3.jpg"
import d from "./images/4.jpg"
let items = [{ src: a }, { src: b }, { src: c }, { src: d }]

ReactDOM.render(<div>
  <Slider
    dalay={3}
    speed={0.5}
    autoPlay={true}
    dots={true}
    arrow={true}
    items={items}
  />
</div>, document.getElementById('root'));
