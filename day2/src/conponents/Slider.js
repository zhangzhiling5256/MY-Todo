import React, { Component } from "react"
import SliderList from "./SliderList";
import SliderOn from "./SliderOn";
import SliderDots from "./SliderDots";

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }
  go = (step) => {
    let index = this.state.index + step;
    if (index > this.props.items.length) {
      this.$ul.style.transitionDuration = "";
      this.$ul.style.left = 0;

      setTimeout(() => {
        this.$ul.style.transitionDuration = this.props.speed + "s";
        index = 1
        this.setState({ index })
      }, 30)
      return;
    }
    if (index < 0) {
      this.$ul.style.transitionDuration = "";
      this.$ul.style.left = this.props.items.length * -1 * 800 + "px"
      setTimeout(() => {
        this.$ul.style.transitionDuration = this.props.speed + "s";
        index = this.props.items.length - 1
        this.setState({ index })
      }, 30)
      return
    }
    this.setState({ index })

  }
  turn = () => {
    this.time = setInterval(() => {
      this.go(1)
    }, this.props.dalay * 1000)
  }
  componentDidMount() {
    if (this.props.autoPlay) {
      this.turn()
    }
    console.log(this.refs.list);
    this.$ul = this.refs.list.refs.ul


  }
  render() {
    return (<div className="container" onMouseEnter={() => { clearInterval(this.time) }} onMouseLeave={() => { this.turn() }}>
      <SliderList ref="list" index={this.state.index} items={this.props.items} speed={this.props.speed} />
      {this.props.arrow ? <SliderOn go={this.go} /> : null}
      {this.props.dots ? <SliderDots items={this.props.items} index={this.state.index} go={this.go} /> : null}
    </div>)
  }
} 