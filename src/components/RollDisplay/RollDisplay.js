import React from 'react'
import './RollDisplay.css'

export default function RollDisplay() {
    return (
        <section className="char-display">
            <h3 className="char-title">[Name] the [Gender] [Race] [Class]</h3>
            <p className="stat-value-label">Stat values:</p><p className="stat-values">15 8 10 11 16 13</p>

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
                        <td>1</td>
                        <td>16</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>Dex</td>
                        <td>8</td>
                        <td>1</td>
                        <td>9</td>
                        <td>-1</td>
                    </tr>
                    <tr>
                        <td>Con</td>
                        <td>10</td>
                        <td>1</td>
                        <td>11</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Int</td>
                        <td>11</td>
                        <td>1</td>
                        <td>12</td>
                        <td>+1</td>
                    </tr>
                    <tr>
                        <td>Wis</td>
                        <td>16</td>
                        <td>1</td>
                        <td>17</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>Cha</td>
                        <td>13</td>
                        <td>1</td>
                        <td>14</td>
                        <td>+2</td>
                    </tr>
                </tbody>
            </table>
            <label htmlFor="bio">Bio:</label>
            <input type="text" name="bio" className="bio-input"></input>
            <button>Save Character</button>
        </section>
    )
}