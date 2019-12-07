import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, withRouter } from 'react-router-dom'
import CharInputs from './components/CharInputs/CharInputs'
import CharList from './components/CharList/CharList'
import Nav from './components/Nav/Nav'
import RollDisplay from './components/RollDisplay/RollDisplay'
import InfoPage from './components/InfoPage/InfoPage'
import CharacterContext from './CharacterContext';




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
      },
      originalRolls: {
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: ''
      },
      bio: ''
    }
  }

  componentDidMount() {
    fetch(`https://roll-a-char-api.herokuapp.com/characters`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ characters: responseJson })
      })
  }

  updateCurrentRoll = (charDetails) => {
    console.log('from updateCurrentRoll in App before state update', this.state)
    this.setState({
      ...this.state.characters, 
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
        },
        originalRolls: {
          strength: charDetails.originalRolls.strength,
          dexterity: charDetails.originalRolls.dexterity,
          constitution: charDetails.originalRolls.constitution,
          intelligence: charDetails.originalRolls.intelligence,
          wisdom: charDetails.originalRolls.wisdom,
          charisma: charDetails.originalRolls.charisma
        },
        bio: ''
      },
      shouldDisplay: false,
      
    })
    console.log('from updateCurrentRoll in App after state update', this.state)
  }

  updateCurrentRollBio = (bio) => {

    this.setState({
      currentRoll: { ...this.state.currentRoll, bio: bio }
    })
    console.log('bio is', bio)

  }

  postCharacter = () => {
    console.log('post')
    console.log('state in postcharacter', this.state.currentRoll)
    fetch(`https://roll-a-char-api.herokuapp.com/characters`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        fullname: this.state.currentRoll.name,
        gender: this.state.currentRoll.gender,
        race: this.state.currentRoll.race,
        class_type: this.state.currentRoll.classType,

        strength_original: this.state.currentRoll.originalRolls.strength,
        dexterity_original: this.state.currentRoll.originalRolls.dexterity,
        constitution_original: this.state.currentRoll.originalRolls.constitution,
        intelligence_original: this.state.currentRoll.originalRolls.intelligence,
        wisdom_original: this.state.currentRoll.originalRolls.wisdom,
        charisma_original: this.state.currentRoll.originalRolls.charisma,

        strength_total: this.state.currentRoll.stats.strength,
        dexterity_total: this.state.currentRoll.stats.dexterity,
        constitution_total: this.state.currentRoll.stats.constitution,
        intelligence_total: this.state.currentRoll.stats.intelligence,
        wisdom_total: this.state.currentRoll.stats.wisdom,
        charisma_total: this.state.currentRoll.stats.charisma,

        bio: this.state.currentRoll.bio
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )

    this.sendToCharactersPage()

  }

  // fetchMethod() {
  //   fetch(`https://roll-a-char-api.herokuapp.com/characters`)
  //     .then(response => response.json())
  //     .then((responseJson) => {
  //       this.setState({ characters: responseJson })
  //     })
  // }

  sendToCharactersPage() {

    // this.setState({
    //   shouldDisplay: true
    // })
    fetch(`https://roll-a-char-api.herokuapp.com/characters`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ characters: responseJson })
      })
    this.props.history.push('/characters')
  }


  render() {
    console.log('currentRoll in App.js is', this.state.currentRoll)
    const contextValue = {
      characters: this.state.characters
    }
    console.log('context is', contextValue)
    return (
      <div className='App'>
        <Nav />
        <main role='main'>
          <Route exact path='/' component={(props) => { return <CharInputs {...props} updateCurrentRoll={this.updateCurrentRoll} /> }} />

          <Route exact path='/' render={props => <RollDisplay
            currentRoll={this.state.currentRoll}
            updateCurrentRollBio={this.updateCurrentRollBio}
            postCharacter={this.postCharacter}
            {...props} />} />
          {/* <CharacterContext.Provider value={contextValue}> */}
            <Route path='/characters' component={(props) => { return <CharList {...props} currentRoll={this.state.currentRoll} shouldDisplay={this.state.shouldDisplay} /> }} />
          {/* </CharacterContext.Provider> */}
          <Route path='/info' component={InfoPage} />
        </main>
      </div>
    )

  }
}

export default withRouter(App);
