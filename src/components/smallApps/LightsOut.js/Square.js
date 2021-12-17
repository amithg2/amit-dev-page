import { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isLight = () => `square ${this.props.light ? "clicked" : ""}`;

  click() {
    this.props.clickHandler(this.props.num);
  }

  render() {
    return (
      <div className={this.isLight()} onClick={this.click.bind(this)}></div>
    );
  }
}

export default Square;
