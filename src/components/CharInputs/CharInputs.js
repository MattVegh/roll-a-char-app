import React, { Component } from 'react'
import './CharInputs.css'

export default class CharInputs extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const name = (event.target['name'].value)
        const gender = (event.target['gender'].value)
        const race = (event.target['race'].value)
        const classType = (event.target['class-type'].value)
        console.log(name, gender, race, classType)
        this.props.updateCurrentRoll(name, gender, race, classType)
        //this.props.updateCurrentRoll('test')
    }

    render() {
        return (
            <form className="char-inputs" onSubmit={this.handleSubmit}>
                <div className="name-gender-box">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="name-input"></input>
                    <label htmlFor="gender">Gender:</label>

                    <select className="gender-input" name='gender'>
                        <option value="">--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <label htmlFor="race">Race:</label>
                <input type="text" name="race" className="name-input"></input>
                <label htmlFor="class-type">Class:</label>
                <input type="text" name="class-type" className="class-input"></input>
                <button >ROLL!</button>
            </form>
        )
    }
}