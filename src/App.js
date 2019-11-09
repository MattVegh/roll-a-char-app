import React, { Component } from 'react';
import './App.css';
import CharInputs from './components/CharInputs/CharInputs'
import CharList from './components/CharList/CharList'
import Nav from './components/Nav/Nav'
import RollDisplay from './components/RollDisplay/RollDisplay'




class App extends Component {
  state = {
    currentRoll: {
      name: '',
      gender: '',
      race: '',
      classType: ''
    }
  }

  updateCurrentRoll = (rollData) => {
    this.setState({currentRoll: {name: rollData, gender: rollData, race: rollData, classType: rollData}})
    //this.setState({currentRoll: {name: rollData.name, gender: rollData.gender, race: rollData.race, classType: rollData.classType}})
    console.log('state is', this.state.currentRoll)
  }


  render() {

    return (
      <div className='App'>
          <Nav />
          <main role='main'>
            <CharInputs updateCurrentRoll={this.updateCurrentRoll}/>
            <RollDisplay />
          </main>
      </div>
    )

  }
}

export default App;
