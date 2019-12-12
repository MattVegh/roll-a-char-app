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
            return '-3'

        } else if (statScore > 5 && statScore < 8) {
            return '-2'

        } else if (statScore > 7 && statScore < 10) {
            return '-1'

        } else if (statScore > 9 && statScore < 12) {
            return '0'

        } else if (statScore > 11 && statScore < 14) {
            return '+1'

        } else if (statScore > 13 && statScore < 16) {
            return '+2'

        } else if (statScore > 15 && statScore < 18) {
            return '+3'

        } else if (statScore > 17 && statScore < 20) {
            return '+4'

        } else if (statScore > 19 && statScore < 22) {
            return '+5'

        } else if (statScore > 21 && statScore < 24) {
            return '+6'
        }

    }

    calculateDifference = (beforeBonus, afterBonus) => {
        if (Math.abs(beforeBonus - afterBonus) === 0) {
            return null
        } else {
            let difference = Math.abs(beforeBonus - afterBonus)
            return difference
        }
    }

    handleChange = (event) => {
        this.props.updateCurrentRollBio(event.target.value)
    }

    handleCharacterSave = () => {
        this.props.postCharacter()
    }

    render() {
        let statsToMap = Object.keys(this.props.currentRoll.stats)

        return (
            <section className='roll-display hidden'>
                <h3 className='char-title'>{this.props.currentRoll.name} the {this.props.currentRoll.gender} {this.props.currentRoll.race} {this.props.currentRoll.classType}</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Stat</th>
                            <th>Value</th>
                            <th>Bonus</th>
                            <th>Total</th>
                            <th>Mod</th>
                        </tr>

                        {statsToMap.map(stat => <tr key={stat}>
                            <td className='stat'>{stat.charAt(0).toUpperCase() + stat.slice(1)}</td>
                            <td className='value'>{this.props.currentRoll.originalRolls[stat]}</td>
                            <td className='bonus'>{this.calculateDifference(this.props.currentRoll.originalRolls[stat], this.props.currentRoll.stats[stat])}</td>
                            <td className='total'>{this.props.currentRoll.stats[stat]}</td>
                            <td className='mod'>{this.calculateModifier(this.props.currentRoll.stats[stat])}</td>
                        </tr>
                        )}

                    </tbody>
                </table>
                <label htmlFor='bio'>Bio:</label>
                <textarea type='text' name='bio' className='bio-input' onChange={this.handleChange}></textarea>
                <button onClick={() => this.handleCharacterSave()}>Save Character</button>
            </section>
        )
    }
}