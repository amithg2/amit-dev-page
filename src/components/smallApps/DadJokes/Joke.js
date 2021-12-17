import { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.upvoteHandler = this.upvoteHandler.bind(this);
    this.downvoteHandler = this.downvoteHandler.bind(this);
    this.state = { rate: this.props.rate };
  }
  upvoteHandler() {
    this.setState((st) => {
      return { rate: st.rate + 1 };
    });
    this.props.arrange(this.props.id, this.props.rate + 1);
  }

  downvoteHandler() {
    this.setState((st) => {
      return { rate: st.rate - 1 };
    });

    this.props.arrange(this.props.id, this.props.rate - 1);
  }

  showEmoji() {
    let mood = [];
    if (this.props.rate >= 0 && this.props.rate <= 15) {
      mood = ["😐", "🤨", "🙂", "😅", "😂", "🤣"];
      return mood[Math.floor(this.props.rate / 3)];
    } else if (this.props.rate <= 0 && this.props.rate > -11) {
      mood = ["😐", "😕", "😒", "😡", "🤬"];
      return mood[-Math.floor(this.props.rate / 3)];
    } else if (this.props.rate > 15) {
      return "🤣";
    } else {
      return "🤬";
    }
  }
  render() {
    const colors = [
      "red",
      "red",
      "lightred",
      "lightsalmon",
      "lightorange",
      "orange",
      "lightyellow",
      "yellow",
      "lightgreen",
      "green",
    ];
    return (
      <div className="main-joke">
        <div className="main-joke-img-vote">
          <div className="votes">
            <h3 className="vote" onClick={this.upvoteHandler}>&#8679;</h3>
            <h3 className="vote" onClick={this.downvoteHandler}>&#8681;</h3>
          </div>

          <h2
          className='colorBorder'
            style={
              this.props.rate > 9
                ? { borderColor: "green" }
                : { borderColor: colors[this.props.rate] }
            }
          >
            {this.props.rate}
          </h2>
        </div>
        <p className='joke' >{this.props.joke}</p>
        <h4 className="emoji">{this.showEmoji()}</h4>
      </div>
    );
  }
}

export default Joke;
