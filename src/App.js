import React, { Component } from "react";
import pic from "./newyork.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: { pic },
        profession: "Software Developer",
      },
      shows: false,
      intervalId: null,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState((prevState) => ({
          timeSinceMount: prevState.timeSinceMount + 1,
        }));
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={pic} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
