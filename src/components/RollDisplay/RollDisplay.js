import React, { Component } from 'react'
import './RollDisplay.css'

export default class RollDisplay extends Component {
//  state = {
//      modifier: ''
//  }

calculateModifier = (statScore) => {
    console.log('calc mod', this.props.currentRoll.stats)

        if (statScore > 3 && statScore < 6) {
            console.log('calc mod -3 for', statScore)
            return '-3'


        } else if (statScore > 5 && statScore < 8) {
            console.log('calc mod -2 for', statScore)
            return '-2'

        } else if (statScore > 7 && statScore < 10) {
            console.log('calc mod -1 for', statScore)
            return '-1'

        } else if (statScore > 9 && statScore < 12) {
            console.log('calc mod 0 for', statScore)
            return '0'

        } else if (statScore > 11 && statScore < 14) {
            console.log('calc mod +1 for', statScore)
            return '+1'

        } else if (statScore > 13 && statScore < 16) {
            console.log('calc mod +2 for', statScore)
            return '+2'

        } else if (statScore > 15 && statScore < 18) {
            console.log('calc mod +3 for', statScore)
            return '+3'

        } else if (statScore > 17 && statScore < 20) {
            console.log('calc mod +4 for', statScore)
            return '+4'

        }
    
}

    render() {

        
        
        console.log('from RollDisplay', this.props.currentRoll)

        return (
            <section className='roll-display hidden'>
                <h3 className='char-title'>{this.props.currentRoll.name} the {this.props.currentRoll.gender} {this.props.currentRoll.race} {this.props.currentRoll.classType}</h3>
                <p className='stat-value-label'>Stat values:</p><p className='stat-values'>{Object.keys(this.props.currentRoll.originalRolls).map(stat => this.props.currentRoll.originalRolls[stat]).join(' ')}</p>

                <table>
                    <tbody>
                        <tr>
                            <th>Stat</th>
                            <th>Value</th>
                            <th>Bonus</th>
                            <th>Total</th>
                            <th>Mod</th>
                        </tr>
                        {/* {Object.keys(this.props.currentRoll.stats).map(stat => <tr>
                            <td>{(this.props.currentRoll.stats[Object.keys(stat)])}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        )} */}
                        <tr>
                            <td>{Object.keys(this.props.currentRoll.stats)[0]}</td>
                            <td>{Object.values(this.props.currentRoll.originalRolls)[0]}</td>
                            <td></td>
                            <td>{this.props.currentRoll.stats.strength}</td>
                            <td>{this.calculateModifier(this.props.currentRoll.stats.strength)}</td>
                        </tr>
                        <tr>
                            <td>Dex</td>
                            <td>{Object.values(this.props.currentRoll.originalRolls)[1]}</td>
                            <td></td>
                            <td>{this.props.currentRoll.stats.dexterity}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Con</td>
                            <td>{Object.values(this.props.currentRoll.originalRolls)[2]}</td>
                            <td></td>
                            <td>{this.props.currentRoll.stats.constitution}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Int</td>
                            <td>{Object.values(this.props.currentRoll.originalRolls)[3]}</td>
                            <td></td>
                            <td>{this.props.currentRoll.stats.intelligence}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Wis</td>
                            <td>{Object.values(this.props.currentRoll.originalRolls)[4]}</td>
                            <td></td>
                            <td>{this.props.currentRoll.stats.wisdom}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Cha</td>
                            <td>{Object.values(this.props.currentRoll.originalRolls)[5]}</td>
                            <td></td>
                            <td>{this.props.currentRoll.stats.charisma}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <label htmlFor='bio'>Bio:</label>
                <input type='text' name='bio' className='bio-input'></input>
                <button>Save Character</button>
            </section>
        )
    }
}