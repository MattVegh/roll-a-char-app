import React, { Component } from 'react'
import './CharList.css'
import CharacterContext from '../../CharacterContext';

export default class CharList extends Component {
    static contextType = CharacterContext;
    state = {
        characters: []
    }

    componentDidMount() {
        fetch(`https://roll-a-char-api.herokuapp.com/characters`)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({ characters: responseJson })
            })
        // this.setState({
        //     characters: this.context.characters
        // })
        // console.log('mounted char list', this.state.characters)
        // console.log('charactercontext', this.context.characters)
    }


    calculateDifference = (beforeBonus, afterBonus) => {
        if (Math.abs(beforeBonus - afterBonus) == 0) {
            return null
        } else {
            let difference = Math.abs(beforeBonus - afterBonus)
            return difference
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

    render() {
        let characters = this.state.characters
        console.log('current characters are', characters)
        console.log('current roll props are', this.props.currentRoll)
        //let statsToMap = Object.keys(this.props.currentRoll.stats)
        console.log('getting display conditions', this.props.shouldDisplay, 'and', this.props.currentRoll, characters)

        return (
            <main role='main'>
                {/* {!this.props.shouldDisplay ? <div></div> : <section className='char-display'>
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

                            {statsToMap.map(stat => <tr>
                                <td>{stat}</td>
                                <td>{this.props.currentRoll.originalRolls[stat]}</td>
                                <td>{this.calculateDifference(this.props.currentRoll.originalRolls[stat], this.props.currentRoll.stats[stat])}</td>
                                <td>{this.props.currentRoll.stats[stat]}</td>
                                <td>{this.calculateModifier(this.props.currentRoll.stats[stat])}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <p>{this.props.currentRoll.bio}</p>
                </section>} */}


                {!characters ? <div></div> : characters.slice(0).reverse().map(detail =>
                    <section className='char-display'>
                        <h3 className='char-title'>{detail.fullname} the {detail.gender} {detail.race} {detail.class_type}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Stat</th>
                                    <th>Value</th>
                                    <th>Bonus</th>
                                    <th>Total</th>
                                    <th>Mod</th>
                                </tr>
                                <tr>
                                    <td>Str</td>
                                    <td>{detail.strength_original}</td>
                                    <td>{this.calculateDifference(detail.strength_original, detail.strength_total)}</td>
                                    <td>{detail.strength_total}</td>
                                    <td>{this.calculateModifier(detail.strength_total)}</td>
                                </tr>
                                <tr>
                                    <td>Dex</td>
                                    <td>{detail.dexterity_original}</td>
                                    <td>{this.calculateDifference(detail.dexterity_original, detail.dexterity_total)}</td>
                                    <td>{detail.dexterity_total}</td>
                                    <td>{this.calculateModifier(detail.dexterity_total)}</td>
                                </tr>
                                <tr>
                                    <td>Con</td>
                                    <td>{detail.constitution_original}</td>
                                    <td>{this.calculateDifference(detail.constitution_original, detail.constitution_total)}</td>
                                    <td>{detail.constitution_total}</td>
                                    <td>{this.calculateModifier(detail.constitution_total)}</td>
                                </tr>
                                <tr>
                                    <td>Int</td>
                                    <td>{detail.intelligence_original}</td>
                                    <td>{this.calculateDifference(detail.intelligence_original, detail.intelligence_total)}</td>
                                    <td>{detail.intelligence_total}</td>
                                    <td>{this.calculateModifier(detail.intelligence_total)}</td>
                                </tr>
                                <tr>
                                    <td>Wis</td>
                                    <td>{detail.wisdom_original}</td>
                                    <td>{this.calculateDifference(detail.wisdom_original, detail.wisdom_total)}</td>
                                    <td>{detail.wisdom_total}</td>
                                    <td>{this.calculateModifier(detail.wisdom_total)}</td>
                                </tr>
                                <tr>
                                    <td>Cha</td>
                                    <td>{detail.charisma_original}</td>
                                    <td>{this.calculateDifference(detail.charisma_original, detail.charisma_total)}</td>
                                    <td>{detail.charisma_total}</td>
                                    <td>{this.calculateModifier(detail.charisma_total)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>{detail.bio}</p>
                    </section>
                )}
            </main>

        )
    }
}