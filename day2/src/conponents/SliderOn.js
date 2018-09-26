import React, { Component } from "react"
export default class SliderOn extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="Slider-arrow">
        <span onClick={() => { this.props.go(-1) }}>&lt;</span>
        <span onClick={() => { this.props.go(1) }}>&gt;</span>
      </div>
    )
  }
} 