import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    detailsToDisplay: ""
  }

  handleOnClick = (event) => {
    console.log(event.target.id);
    this.setState({
      detailsToDisplay: event.target.id
    })
  }

  whichOneShouldDesplay = () => {
    if (this.state.detailsToDisplay === "profile") {
      return <Profile />
    } else if (this.state.detailsToDisplay === "photo") {
      return <Photos />
    } else if (this.state.detailsToDisplay === "cocktail") {
      return <Cocktails />
    } else if (this.state.detailsToDisplay === "pokemon") {
      return <Pokemon />
    }
  }


  render() {
    return (
      <div>
        <MenuBar onClick={this.handleOnClick}/>
        {this.whichOneShouldDesplay()}
      </div>
    )
  }

}

export default MainBox
