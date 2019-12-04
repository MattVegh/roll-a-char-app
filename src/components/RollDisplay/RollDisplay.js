import React, { Component } from 'react'
import './RollDisplay.css'

export default class RollDisplay extends Component {
    state = {
        bio: ''
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

    handleChange = (event) => {
        this.setState({
            bio: event.target.value
        })
        console.log('state is', this.state,
            'props are', this.props.currentRoll)
    }
    handleCharacterSave = () => {
        this.props.updateCurrentRollBio(this.state.bio)
    }

    render() {
        console.log('current props are', this.props.currentRoll)
        let statsToMap = Object.keys(this.props.currentRoll.stats)
        console.log('STM', statsToMap)

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
                            <td>{stat}</td>
                            <td>{this.props.currentRoll.originalRolls[stat]}</td>
                            <td>{this.calculateDifference(this.props.currentRoll.originalRolls[stat], this.props.currentRoll.stats[stat])}</td>
                            <td>{this.props.currentRoll.stats[stat]}</td>
                            <td>{this.calculateModifier(this.props.currentRoll.stats[stat])}</td>
                        </tr>
                        )}


                        {/* <tr>
                            <td>{Object.keys(this.props.currentRoll.stats)[0]}</td>
                            <td>{Object.values(this.props.currentRoll.originalRolls)[0]}</td>
                            <td>{this.calculateDifference(this.props.currentRoll.originalRolls.strength, this.props.currentRoll.stats.strength)}</td>
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
                        </tr> */}
                    </tbody>
                </table>
                <label htmlFor='bio'>Bio:</label>
                <input type='text' name='bio' className='bio-input' onChange={this.handleChange}></input>
                <button onClick={(event) => this.handleCharacterSave(event)}>Save Character</button>
            </section>
        )
    }
}