import "./LightsOut.css";
import { Component } from "react";
import Square from "./Square";
import "./Square.css";

class LightsOut extends Component {
  static changeClose(e) {}
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = { lightOn: this.randArray(), isWon: false };
  }
  randArray() {
    const arr = Array.from({ length: 25 }).map((e) => {
      return Math.floor(Math.random() * 2);
    });
    return arr;
  }

  changeClose(e) {
    const lightsOn = this.state.lightOn;
    let arr = lightsOn.map((x) => x);
    arr[e] ? (arr[e] = 0) : (arr[e] = 1);
    while (arr.length > 25) arr.pop();
    this.setState({ lightOn: arr });
  }

  async clickHandler(e) {
    if (e === 4 || e === 9 || e === 14 || e === 19 || e === 24) {
      await this.changeClose(e - 1);
      await this.changeClose(e - 5);
      await this.changeClose(e + 5);
    } else if (e === 0 || e === 5 || e === 10 || e === 15 || e === 20) {
      await this.changeClose(e + 1);
      await this.changeClose(e - 5);
      await this.changeClose(e + 5);
    } else {
      await this.changeClose(e + 1);
      await this.changeClose(e - 1);
      await this.changeClose(e - 5);
      await this.changeClose(e + 5);
    }

    const lightIsOn = this.state.lightOn;
    let arr = lightIsOn.map((x) => x);
    arr[e] ? (arr[e] = 0) : (arr[e] = 1);
    await this.setState({ lightOn: arr });

    if (!arr.includes(0)) {
      this.setState({ isWon: true });
    }
  }

  firstBuild(nums) {
    const arr = Array.from({ length: 25 }).map((e, i) => {
      return (
        <Square
          num={i}
          key={i}
          light={nums[i]}
          clickHandler={this.clickHandler}
        />
      );
    });

    return arr;
  }

  render() {
    return (
      <div className="lightsOut">
        {this.state.isWon ? (
          <h1 className="App-header-win">You won !</h1>
        ) : (
          <div>
            <h1 className="App-header">Try to light em all !</h1>
            <div className="App">{this.firstBuild(this.state.lightOn)}</div>
          </div>
        )}
      </div>
    );
  }
}

export default LightsOut;
