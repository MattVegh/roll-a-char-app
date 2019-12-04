import React, { Component } from 'react'
import './CharList.css'

export default class CharList extends Component {
    state = {
        characters: []
    }

    componentDidMount() {
        fetch(`https://roll-a-char-api.herokuapp.com/characters`)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({ characters: responseJson })
            })
    }

    render() {
        let characters = this.state.characters
        console.log('current characters are', characters)
        return (
            <main role='main'>
                {characters.slice(0).reverse().map(detail =>
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
                                    <td>{detail.strength_race_bonus}</td>
                                    <td>{detail.strength_total}</td>
                                    <td>{detail.strength_modifier}</td>
                                </tr>
                                <tr>
                                    <td>Dex</td>
                                    <td>{detail.dexterity_original}</td>
                                    <td>{detail.dexterity_race_bonus}</td>
                                    <td>{detail.dexterity_total}</td>
                                    <td>{detail.dexterity_modifier}</td>
                                </tr>
                                <tr>
                                    <td>Con</td>
                                    <td>{detail.constitution_original}</td>
                                    <td>{detail.constitution_race_bonus}</td>
                                    <td>{detail.constitution_total}</td>
                                    <td>{detail.constitution_modifier}</td>
                                </tr>
                                <tr>
                                    <td>Int</td>
                                    <td>{detail.intelligence_original}</td>
                                    <td>{detail.intelligence_race_bonus}</td>
                                    <td>{detail.intelligence_total}</td>
                                    <td>{detail.intelligence_modifier}</td>
                                </tr>
                                <tr>
                                    <td>Wis</td>
                                    <td>{detail.wisdom_original}</td>
                                    <td>{detail.wisdom_race_bonus}</td>
                                    <td>{detail.wisdom_total}</td>
                                    <td>{detail.wisdom_modifier}</td>
                                </tr>
                                <tr>
                                    <td>Cha</td>
                                    <td>{detail.charisma_original}</td>
                                    <td>{detail.charisma_race_bonus}</td>
                                    <td>{detail.charisma_total}</td>
                                    <td>{detail.charisma_modifier}</td>
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