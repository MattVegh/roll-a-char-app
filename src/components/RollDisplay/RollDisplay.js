import React, { Component } from 'react'
import './RollDisplay.css'

export default class RollDisplay extends Component {
    state = {
        currentRoll: {
         
          bio: ''
        }
      }


    calculateModifier = (statScore) => {


        if (statScore > 3 && statScore < 6) {
            //console.log('calc mod -3 for', statScore)
            return '-3'

        } else if (statScore > 5 && statScore < 8) {
            //console.log('calc mod -2 for', statScore)
            return '-2'

        } else if (statScore > 7 && statScore < 10) {
            //console.log('calc mod -1 for', statScore)
            return '-1'

        } else if (statScore > 9 && statScore < 12) {
            //console.log('calc mod 0 for', statScore)
            return '0'

        } else if (statScore > 11 && statScore < 14) {
            //console.log('calc mod +1 for', statScore)
            return '+1'

        } else if (statScore > 13 && statScore < 16) {
            //console.log('calc mod +2 for', statScore)
            return '+2'

        } else if (statScore > 15 && statScore < 18) {
            //console.log('calc mod +3 for', statScore)
            return '+3'

        } else if (statScore > 17 && statScore < 20) {
            //console.log('calc mod +4 for', statScore)
            return '+4'

        } else if (statScore > 19 && statScore < 22) {
            return '+5'

        } else if (statScore > 21 && statScore < 24) {
            return '+6'
        }

    }

    calculateDifference = (beforeBonus, afterBonus) => {
        if (Math.abs(beforeBonus - afterBonus) == 0) {
            return null
        } else {
            let difference = Math.abs(beforeBonus - afterBonus)
            return difference
        }
    }



    // handleChange = (event) => {
    //     this.setState({
    //         currentRoll: {
    //             bio: event.target.value
    //         }
    //     })
    //     console.log('handleChange', 'state is', this.state,
    //         'props are', this.props.currentRoll)
    // }

    handleChange = (event) => {
        this.props.updateCurrentRollBio(event.target.value)
        console.log('handleChange', 'state is', this.state,
            'props are', this.props.currentRoll)
    }


    handleCharacterSave = () => {
        this.props.postCharacter()
        
    }

    render() {

        console.log('current props are', this.props.currentRoll)
        console.log('CR stats', this.props.currentRoll.stats)

        let statsToMap = Object.keys(this.props.currentRoll.stats)


        return (
            <section className='roll-display hidden'>
                <h3 className='char-title'>{this.props.currentRoll.name} the {this.props.currentRoll.gender} {this.props.currentRoll.race} {this.props.currentRoll.classType}</h3>
                {/* <p className='stat-value-label'>Stat values:</p><p className='stat-values'>{Object.keys(this.props.currentRoll.originalRolls).map(stat => this.props.currentRoll.originalRolls[stat]).join(' ')}</p> */}

                <table>
                    <tbody>
                        <tr>
                            <th>Stat</th>
                            <th>Value</th>
                            <th>Bonus</th>
                            <th>Total</th>
                            <th>Mod</th>
                        </tr>

                        {statsToMap.map(stat => <tr>
                            <td>{stat.charAt(0).toUpperCase() + stat.slice(1)}</td>
                            <td>{this.props.currentRoll.originalRolls[stat]}</td>
                            <td>{this.calculateDifference(this.props.currentRoll.originalRolls[stat], this.props.currentRoll.stats[stat])}</td>
                            <td>{this.props.currentRoll.stats[stat]}</td>
                            <td>{this.calculateModifier(this.props.currentRoll.stats[stat])}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <label htmlFor='bio'>Bio:</label>
                <input type='text' name='bio' className='bio-input' onChange={this.handleChange}></input>
                <button onClick={() => this.handleCharacterSave()}>Save Character</button>
            </section>
        )
    }
}