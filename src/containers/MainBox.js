import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    ifSelected: "profile"
  };

  handleClick = event => {
    this.setState({
      ifSelected: event.target.id
    });
  };

  detailsToDisplay = () => {
    if (this.state.ifSelected === "profile") {
      return <Profile />;
    } else if (this.state.ifSelected === "cocktail") {
      return <Cocktails />;
    } else if (this.state.ifSelected === "photo") {
      return <Photos />;
    } else if (this.state.ifSelected === "pokemon") {
      return <Pokemon />;
    }
  };

  render() {
    return (
      <div>
        <MenuBar handleClick={this.handleClick} />
        {this.detailsToDisplay()}
      </div>
    );
  }
}

export default MainBox;
