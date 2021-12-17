import "./DadJokes.css";
import { Component } from "react";
import axios from "axios";
import Joke from "./Joke";

class DadJokes extends Component {
  constructor(props) {
    super(props);
    this.moreJokesHandler = this.moreJokesHandler.bind(this);
    this.state = { jokes: [], run: false, runLenght: 9 };
  }

  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      this.getJokes();
    }
  }
  async getJokes() {
    const arr = this.state.jokes.map((e) => e.text);
    const idx = Math.floor(Math.random() * 1200) + 1;
    let joke = await axios
      .get("https://icanhazdadjoke.com/slack")
      .then((res) => res.data.attachments[0]);

    if (!arr.includes(joke.text)) {
      joke.id = idx;
      joke.rate = 0;
      this.setState({ jokes: [...this.state.jokes, joke] });
    } else {
      this.setState({ runLenght: this.state.runLenght - 1 });
    }
    if (this.state.jokes.length > this.state.runLenght)
      this.setState({ run: true });
  }

  showJokes() {
    const arr = this.state.jokes;
    const newArr = arr.map((e, i) => (
      <Joke
        joke={e.text}
        key={i}
        id={e.id}
        arrange={this.arrange.bind(this)}
        rate={e.rate}
      />
    ));
    return newArr;
  }

  arrange(idx, rate) {
    let arr = this.state.jokes;
    const ele = arr.filter((e) => {
      if (e.id === idx) {
        return e;
      }
    });
    ele[0].rate = rate;
    const index = this.state.jokes.indexOf(ele[0]);
    arr[index] = ele[0];
    if (idx > 0) {
      arr.sort((a, b) => {
        if (b.rate > a.rate) return 1;
        if (b.rate < a.rate) return -1;
        return 0;
      });
    } else {
      arr.sort((a, b) => {
        if (a.rate > b.rate) return 1;
        if (a.rate < b.rate) return -1;
        return 0;
      });
    }
    this.setState({ jokes: arr });
  }

  async moreJokesHandler() {
    this.setState({ run: false, runLenght: this.state.runLenght + 10 });
    for (let i = 0; i < 10; i++) {
      await this.getJokes();
    }

    const arr = this.state.jokes;
    arr.sort((a, b) => {
      if (b.rate > a.rate) return 1;
      if (b.rate < a.rate) return -1;
      return 0;
    });
    this.setState({ jokes: arr });
  }

  render() {
    if (this.state.run) {
      return (
        <div className="background">
          <div className="main">
            <div className="jokes">
              <div className="get-jokes">
                <img
                  src="https://cliply.co/wp-content/uploads/2021/03/392103200_LAUGHING_EMOJI_400px.gif"
                  id="laugh-gif"
                />
                <button className="button-81" onClick={this.moreJokesHandler}>
                  Click for more !
                </button>
              </div>
              <div className="get-jokes-small">
                <button className="button-81" onClick={this.moreJokesHandler}>
                  Click for more !
                </button>
              </div>
              <div className="show-jokes" id="style-6">
                {this.showJokes()}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="background">
          <img
            src="https://icon-library.com/images/cat-icon-gif/cat-icon-gif-19.jpg"
            id="loading"
          />
        </div>
      );
    }
  }
}

export default DadJokes;
