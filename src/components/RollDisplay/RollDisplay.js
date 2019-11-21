import React, { Component } from 'react'
import './RollDisplay.css'

export default class RollDisplay extends Component {
//  state = {
//      modifier: ''
//  }

 

    render() {

        // calculateModifier = () => {
        //     console.log('calc mod', this.props.currentRoll.stats)
        //     console.log('calc mod map', Object.keys(this.props.currentRoll.stats).map(stat => this.props.currentRoll.stats[stat]))
        //     Object.keys(this.props.currentRoll.stats).map(stat => {
        //         if (this.props.currentRoll.stats[stat] > 3 && this.props.currentRoll.stats[stat] < 6) {
        //             console.log('calc mod -3 for', this.props.currentRoll.stats[stat])
        //             this.setState({
        //                 modifier: '-3'
        //             }) 
        
        //         } else if (this.props.currentRoll.stats[stat] > 5 && this.props.currentRoll.stats[stat] < 8) {
        //             console.log('calc mod -2 for', this.props.currentRoll.stats[stat])
        //             this.setState({
        //                 modifier: '-2'
        //             })
        
        //         } else if (this.props.currentRoll.stats[stat] > 7 && this.props.currentRoll.stats[stat] < 10) {
        //             console.log('calc mod -1 for', this.props.currentRoll.stats[stat])
        //             this.setState({
        //                 modifier: '-1'
        //             })
        
        //         } else if (this.props.currentRoll.stats[stat] > 9 && this.props.currentRoll.stats[stat] < 12) {
        //             console.log('calc mod 0 for', this.props.currentRoll.stats[stat])
        //             this.setState({
        //                 modifier: '0'
        //             })
        
        //         } else if (this.props.currentRoll.stats[stat] > 11 && this.props.currentRoll.stats[stat] < 14) {
        //             console.log('calc mod +1 for', this.props.currentRoll.stats[stat])
        //             this.setState({
        //                 modifier: '+1'
        //             })
        
        //         } else if (this.props.currentRoll.stats[stat] > 13 && this.props.currentRoll.stats[stat] < 16) {
        //             console.log('calc mod +2 for', this.props.currentRoll.stats[stat])
        //             this.setState({
        //                 modifier: '+2'
        //             })
        
        //         } else if (this.props.currentRoll.stats[stat] > 15 && this.props.currentRoll.stats[stat] < 18) {
        //             console.log('calc mod +3 for', this.props.currentRoll.stats[stat])
        //             this.setState({
        //                 modifier: '+3'
        //             })
        
        //         } else if (this.props.currentRoll.stats[stat] > 17 && this.props.currentRoll.stats[stat] < 20) {
        //             console.log('calc mod +4 for', this.props.currentRoll.stats[stat])
        //             this.setState({
        //                 modifier: '+4'
        //             })
        
        //         }
        //     })
        // }
        
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
                            <td></td>
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