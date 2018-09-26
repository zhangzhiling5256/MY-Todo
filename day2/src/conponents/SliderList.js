import React, { Component } from "react"
export default class SliderList extends Component {
  constructor() {
    super()
  }
  render() {
    let style = {
      width: this.props.items.length * 800 + 800 + "px", left: this.props.index * 800 * -1 + "px",
      transition: `left ${this.props.speed}s linear`
    }
    return (
      <ul style={style} ref="ul">
        {this.props.items.map((item, index) => (
          <li key={index}><img src={item.src} alt="" /></li>
        )
        )}
        <li><img src={this.props.items[0].src} /></li>
      </ul>
    )
  }
} 
