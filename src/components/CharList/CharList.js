import React, { Component } from 'react'
import './CharList.css'
import CharacterContext from '../../CharacterContext';

export default class CharList extends Component {
    static contextType = CharacterContext;
    state = {
        characters: [],
    }

    componentDidMount() {
        this.fetchCharacters()
    }

    componentDidUpdate() {

        if (this.props.shouldDisplay === true) {
            this.fetchCharacters()
            this.props.handleUpdate()
        }
    }




    fetchCharacters() {
        fetch(`https://roll-a-char-api.herokuapp.com/characters`)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({ characters: responseJson })
            })
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

        return (
            <main role='main'>

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
                                    <td>{detail.Strength_original}</td>
                                    <td>{this.calculateDifference(detail.Strength_original, detail.Strength_total)}</td>
                                    <td>{detail.Strength_total}</td>
                                    <td>{this.calculateModifier(detail.Strength_total)}</td>
                                </tr>
                                <tr>
                                    <td>Dex</td>
                                    <td>{detail.Dexterity_original}</td>
                                    <td>{this.calculateDifference(detail.Dexterity_original, detail.Dexterity_total)}</td>
                                    <td>{detail.Dexterity_total}</td>
                                    <td>{this.calculateModifier(detail.Dexterity_total)}</td>
                                </tr>
                                <tr>
                                    <td>Con</td>
                                    <td>{detail.Constitution_original}</td>
                                    <td>{this.calculateDifference(detail.Constitution_original, detail.Constitution_total)}</td>
                                    <td>{detail.Constitution_total}</td>
                                    <td>{this.calculateModifier(detail.Constitution_total)}</td>
                                </tr>
                                <tr>
                                    <td>Int</td>
                                    <td>{detail.Intelligence_original}</td>
                                    <td>{this.calculateDifference(detail.Intelligence_original, detail.Intelligence_total)}</td>
                                    <td>{detail.Intelligence_total}</td>
                                    <td>{this.calculateModifier(detail.Intelligence_total)}</td>
                                </tr>
                                <tr>
                                    <td>Wis</td>
                                    <td>{detail.Wisdom_original}</td>
                                    <td>{this.calculateDifference(detail.Wisdom_original, detail.Wisdom_total)}</td>
                                    <td>{detail.Wisdom_total}</td>
                                    <td>{this.calculateModifier(detail.Wisdom_total)}</td>
                                </tr>
                                <tr>
                                    <td>Cha</td>
                                    <td>{detail.Charisma_original}</td>
                                    <td>{this.calculateDifference(detail.Charisma_original, detail.Charisma_total)}</td>
                                    <td>{detail.Charisma_total}</td>
                                    <td>{this.calculateModifier(detail.Charisma_total)}</td>
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