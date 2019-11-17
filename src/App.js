import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
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
      classType: '',
      stats: {
        strength: '',
        dexterity: '', 
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
      }
    }
  }

  updateCurrentRoll = (charDetails) => {
    this.setState({
      currentRoll: {
        name: charDetails.name,
        gender: charDetails.gender,
        race: charDetails.race,
        classType: charDetails.classType,
        stats: {
          strength: charDetails.stats.strength,
          dexterity: charDetails.stats.dexterity, 
          constitution: charDetails.stats.constitution,
          intelligence: charDetails.stats.intelligence,
          wisdom: charDetails.stats.wisdom,
          charisma: charDetails.stats.charisma,
        }
      }
    })
  }


  render() {

    return (
      <div className='App'>
        <Nav />
        <main role='main'>
          <Route exact path='/' component={(props) => { return <CharInputs {...props} updateCurrentRoll={this.updateCurrentRoll} /> }} />
          <Route exact path='/' render={props => <RollDisplay currentRoll={this.state.currentRoll} {...props} />} />
          <Route exact path='/characters' component={CharList} />
        </main>
      </div>
    )

  }
}

export default App;
