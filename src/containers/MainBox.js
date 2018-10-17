import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state={
    item:''
  }

  handleClick=(e)=>{
    this.setState({item:e.target.id})
  }

  detailsToDisplay=()=>{
    if (this.state.item==='profile') {
      return <Profile />
    } else if (this.state.item==='photo') {
      return <Photos />
    }else if (this.state.item==='cocktail') {
      return <Cocktails />
    }else if (this.state.item==='pokemon') {
      return <Pokemon />
    }
     else{
       return null
    }
  }
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
