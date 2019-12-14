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
        if (Math.abs(beforeBonus - afterBonus) === 0) {
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
        
        return (
            <main role='main'>

                {!characters ? <div></div> : characters.slice(0).reverse().map(detail =>
                    <section className='char-display' key={detail.id}>
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
                                    <td className='stat' >Strength</td>
                                    <td className='value' >{detail.strength_original}</td>
                                    <td className='bonus' >{this.calculateDifference(detail.strength_original, detail.strength_total)}</td>
                                    <td className='total' >{detail.strength_total}</td>
                                    <td className='mod' >{this.calculateModifier(detail.strength_total)}</td>
                                </tr>
                                <tr>
                                    <td className='stat' >Dexterity</td>
                                    <td className='value' >{detail.dexterity_original}</td>
                                    <td className='bonus' >{this.calculateDifference(detail.dexterity_original, detail.dexterity_total)}</td>
                                    <td className='total' >{detail.dexterity_total}</td>
                                    <td className='mod' >{this.calculateModifier(detail.dexterity_total)}</td>
                                </tr>
                                <tr>
                                    <td className='stat' >Constitution</td>
                                    <td className='value' >{detail.constitution_original}</td>
                                    <td className='bonus' >{this.calculateDifference(detail.constitution_original, detail.constitution_total)}</td>
                                    <td className='total' >{detail.constitution_total}</td>
                                    <td className='mod' >{this.calculateModifier(detail.constitution_total)}</td>
                                </tr>
                                <tr>
                                    <td className='stat' >Intelligence</td>
                                    <td className='value' >{detail.intelligence_original}</td>
                                    <td className='bonus' >{this.calculateDifference(detail.intelligence_original, detail.intelligence_total)}</td>
                                    <td className='total' >{detail.intelligence_total}</td>
                                    <td className='mod' >{this.calculateModifier(detail.intelligence_total)}</td>
                                </tr>
                                <tr>
                                    <td className='stat' >Wisdom</td>
                                    <td className='value' >{detail.wisdom_original}</td>
                                    <td className='bonus' >{this.calculateDifference(detail.wisdom_original, detail.wisdom_total)}</td>
                                    <td className='total' >{detail.wisdom_total}</td>
                                    <td className='mod' >{this.calculateModifier(detail.wisdom_total)}</td>
                                </tr>
                                <tr>
                                    <td className='stat' >Charisma</td>
                                    <td className='value' >{detail.charisma_original}</td>
                                    <td className='bonus' >{this.calculateDifference(detail.charisma_original, detail.charisma_total)}</td>
                                    <td className='total' >{detail.charisma_total}</td>
                                    <td className='mod' >{this.calculateModifier(detail.charisma_total)}</td>
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