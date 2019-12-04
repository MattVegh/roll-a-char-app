import React, { Component } from 'react'
import './CharList.css'
import CharacterApiService from '../../services/character-api-service'
import config from '../../config'

export default class CharList extends Component {
    state = {
        characters: []
    }

    componentDidMount() {
        fetch(`https://roll-a-char-api.herokuapp.com/characters`)
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({characters: responseJson});
            console.log('state is', this.state);
        })
    }

    render() {
        
        return (
            <main role='main'>
                <section className='char-display'>
                    <h3 className='char-title'>Barendd the Male Dwarf Fighter</h3>
                    <p className='stat-value-label'>Stat values:</p><p className='stat-values'>15 8 10 11 16 13</p>
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
                                <td>15</td>
                                <td>0</td>
                                <td>15</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>Dex</td>
                                <td>11</td>
                                <td>0</td>
                                <td>11</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Con</td>
                                <td>10</td>
                                <td>2</td>
                                <td>12</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>Int</td>
                                <td>8</td>
                                <td>0</td>
                                <td>8</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>Wis</td>
                                <td>16</td>
                                <td>0</td>
                                <td>16</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>Cha</td>
                                <td>13</td>
                                <td>0</td>
                                <td>13</td>
                                <td>+1</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Bio: Optional section for the user to input information on their char</p>
                </section>
                <section className='char-display'>
                    <h3 className='char-title'>Rhogar Ilbak the Male Dragonborn Warlock</h3>
                    <p className='stat-value-label'>Stat values:</p><p className='stat-values'>14 14 11 12 12 15</p>
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
                                <td>11</td>
                                <td>2</td>
                                <td>13</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>Dex</td>
                                <td>14</td>
                                <td>0</td>
                                <td>14</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>Con</td>
                                <td>14</td>
                                <td>0</td>
                                <td>14</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>Int</td>
                                <td>12</td>
                                <td>0</td>
                                <td>12</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>Wis</td>
                                <td>12</td>
                                <td>0</td>
                                <td>12</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>Cha</td>
                                <td>15</td>
                                <td>1</td>
                                <td>16</td>
                                <td>+3</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Bio: Optional section for the user to input information on their char</p>
                </section>
                <section className='char-display'>
                    <h3 className='char-title'>Thokk the Male Half-Orc Monk</h3>
                    <p className='stat-value-label'>Stat values:</p><p className='stat-values'>14 8 9 15 15 10</p>
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
                                <td>10</td>
                                <td>2</td>
                                <td>12</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>Dex</td>
                                <td>15</td>
                                <td>0</td>
                                <td>15</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>Con</td>
                                <td>15</td>
                                <td>1</td>
                                <td>16</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>Int</td>
                                <td>9</td>
                                <td>0</td>
                                <td>9</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>Wis</td>
                                <td>14</td>
                                <td>0</td>
                                <td>14</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>Cha</td>
                                <td>8</td>
                                <td>0</td>
                                <td>8</td>
                                <td>-1</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Bio: Optional section for the user to input information on their char</p>
                </section>
            </main>
        )
    }
}