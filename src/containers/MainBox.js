import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    currentlySelected: 'profile'
  }

  handleClick = event => {
    this.setState({
      currentlySelected: event.target.id
    })
  }

  detailsToDisplay = () => {
    if(this.state.currentlySelected === 'profile'){
      return <Profile />
    } else if(this.state.currentlySelected === 'photo'){
      return <Photos />
    } else if(this.state.currentlySelected === 'cocktail'){
      return <Cocktails />
    } else if(this.state.currentlySelected === 'pokemon'){
      return <Pokemon />
    }
  }

  render() {
    return (
      <div>
        <MenuBar handleClick={this.handleClick} />
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
