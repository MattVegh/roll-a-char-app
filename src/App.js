import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import CharInputs from './components/CharInputs/CharInputs'
import CharList from './components/CharList/CharList'
import Nav from './components/Nav/Nav'
import RollDisplay from './components/RollDisplay/RollDisplay'
import InfoPage from './components/InfoPage/InfoPage'





class App extends Component {
  state = {
    currentRoll: {
      name: '',
      gender: '',
      race: '',
      classType: '',
      stats: {
        Strength: '',
        Dexterity: '',
        Constitution: '',
        Intelligence: '',
        Wisdom: '',
        Charisma: '',
      },
      originalRolls: {
        Strength: '',
        Dexterity: '',
        Constitution: '',
        Intelligence: '',
        Wisdom: '',
        Charisma: ''
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
      currentRoll: {
        name: charDetails.name,
        gender: charDetails.gender,
        race: charDetails.race,
        classType: charDetails.classType,
        stats: {
          Strength: charDetails.stats.Strength,
          Dexterity: charDetails.stats.Dexterity,
          Constitution: charDetails.stats.Constitution,
          Intelligence: charDetails.stats.Intelligence,
          Wisdom: charDetails.stats.Wisdom,
          Charisma: charDetails.stats.Charisma,
        },
        originalRolls: {
          Strength: charDetails.originalRolls.Strength,
          Dexterity: charDetails.originalRolls.Dexterity,
          Constitution: charDetails.originalRolls.Constitution,
          Intelligence: charDetails.originalRolls.Intelligence,
          Wisdom: charDetails.originalRolls.Wisdom,
          Charisma: charDetails.originalRolls.Charisma
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

        Strength_original: this.state.currentRoll.originalRolls.Strength,
        Dexterity_original: this.state.currentRoll.originalRolls.Dexterity,
        Constitution_original: this.state.currentRoll.originalRolls.Constitution,
        Intelligence_original: this.state.currentRoll.originalRolls.Intelligence,
        Wisdom_original: this.state.currentRoll.originalRolls.Wisdom,
        Charisma_original: this.state.currentRoll.originalRolls.Charisma,

        Strength_total: this.state.currentRoll.stats.Strength,
        Dexterity_total: this.state.currentRoll.stats.Dexterity,
        Constitution_total: this.state.currentRoll.stats.Constitution,
        Intelligence_total: this.state.currentRoll.stats.Intelligence,
        Wisdom_total: this.state.currentRoll.stats.Wisdom,
        Charisma_total: this.state.currentRoll.stats.Charisma,

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

  sendToCharactersPage() {

    this.setState({
      shouldDisplay: true
    })
    this.props.history.push('/characters')

  }

  handleUpdate = () => {
    this.setState({
      shouldDisplay: false
    })
  }

  render() {
    console.log('currentRoll in App.js is', this.state.currentRoll)

    return (
      <div className='App'>
        <div className='app-container'>
          <Nav />
          <main role='main'>
            <Route exact path='/' component={(props) => { return <CharInputs {...props} updateCurrentRoll={this.updateCurrentRoll} /> }} />

            <Route exact path='/' render={props => <RollDisplay
              currentRoll={this.state.currentRoll}
              updateCurrentRollBio={this.updateCurrentRollBio}
              postCharacter={this.postCharacter}
              {...props} />} />
            <Route path='/characters' component={(props) => { return <CharList {...props} currentRoll={this.state.currentRoll} shouldDisplay={this.state.shouldDisplay} handleUpdate={this.handleUpdate} /> }} />
            <Route path='/info' component={InfoPage} />
          </main>
        </div>
      </div>
    )

  }
}

export default withRouter(App);
