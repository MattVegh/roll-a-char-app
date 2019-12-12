import React, { Component } from 'react'
import './CharInputs.css'
import nameStore from '../../name-store'

export default class CharInputs extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const charDetails = {}
        Object.values(event.target).map(element => {
            const tagName = element.tagName
            if (tagName === 'INPUT' || tagName === 'SELECT') {
                const inputName = element.getAttribute('name')
                
                charDetails[inputName] = element.value;
            }
        })

        this.handleInputFill(charDetails)

    };

    handleInputFill(charDetails) {
        let races = Object.keys(nameStore.races)
        let genders = nameStore.genders
        let classes = Object.keys(nameStore.classTypes)

        if (!charDetails.gender) {
            let randomGender = genders[Math.floor(Math.random() * genders.length)]
            charDetails.gender = randomGender;
        }

        if (!charDetails.classType) {
            let randomClass = classes[Math.floor(Math.random() * classes.length)]
            charDetails.classType = randomClass
        }

        if (!charDetails.race) {
            let randomRace = races[Math.floor(Math.random() * races.length)]
            charDetails.race = randomRace
        }

        if (!charDetails.name) {

            let firstNameArray = nameStore.races[charDetails.race].Gender[charDetails.gender].FirstNames
            let randomFirstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)]

            let lastNameArray = nameStore.races[charDetails.race].LastNames
            let randomLastName = lastNameArray ? lastNameArray[Math.floor(Math.random() * lastNameArray.length)] : ''

            charDetails.name = `${randomFirstName} ${randomLastName}`
        }

        this.generateStats(charDetails)
        document.querySelector('.roll-display').classList.remove('hidden')
    }

    generateStats = (charDetails) => {
        const statArray = []
        const originalRollsArray = []

        // get random value 1-6, 4 times. drop lowest value. add 3 remaining values. push to statArray. repeat 6 times. 

        for (let i = 0; i < 6; i++) {
            const dieArray = []
            for (let j = 0; j < 4; j++) {
                let roll = Math.floor(Math.random() * 6) + 1;
                dieArray.push(roll)
            }

            dieArray.sort().shift()
            let stat = dieArray[0] + dieArray[1] + dieArray[2]
            statArray.push(stat)
            originalRollsArray.push(stat)
        }

        charDetails.stats = statArray
        charDetails.originalRolls = originalRollsArray

        this.assignStats(charDetails)

    }

    assignStats = (charDetails) => {
        let statNames = nameStore.statNames
        let topStats = nameStore.classTypes[charDetails.classType].TopStats

        //randomize the top stats for classes that have 2 priorities
        if (Math.floor(Math.random() * 1) === 0) {
            topStats.sort((a, b) => a - b)
        } else {
            topStats.sort((a, b) => b - a)
        }

        //assign value to the prioritized stat(s)
        topStats.forEach(stat => {
            let topRoll = Math.max(...charDetails.stats)
            charDetails.stats.splice(charDetails.stats.indexOf(topRoll), 1)
            charDetails.stats[stat] = topRoll
            charDetails.originalRolls[stat] = topRoll
        });

        //assign values to the remaining stats
        statNames.forEach(stat => {
            if (!charDetails.stats[stat]) {
                let roll = charDetails.stats[Math.floor(Math.random() * charDetails.stats.length)]
                charDetails.stats.splice(charDetails.stats.indexOf(roll), 1)
                charDetails.stats[stat] = roll
                charDetails.originalRolls[stat] = roll
            }
        })
        this.addRaceBonus(charDetails)
    }

    addRaceBonus = (charDetails) => {

        let statBonusName = Object.keys(nameStore.races[charDetails.race].statBonus)
        let statBonusValue = Object.values(nameStore.races[charDetails.race].statBonus)

        statBonusName.forEach(stat => {
            let modifiedStat = charDetails.stats[stat] + statBonusValue.shift()
            charDetails.stats[stat] = modifiedStat
        });

        if (charDetails.race === 'Half-Elf') {

            let i = 0;
            let previousStat;
            while (i < 2) {
                let extraStat = nameStore.statNames[Math.floor(Math.random() * nameStore.statNames.length)]

                if (extraStat !== 'charisma' || previousStat) {
                    charDetails.stats[extraStat] += 1
                    i++
                    previousStat = extraStat
                }

            }
        }

        this.props.updateCurrentRoll(charDetails)
    }



    render() {
        let classToMap = Object.keys(nameStore.classTypes)
        let races = Object.keys(nameStore.races)

        return (

            <form className='char-inputs' onSubmit={this.handleSubmit}>
                <div className='app-desc-container'>
                <p className='app-desc'>This app will help you skip some of the beginning steps when making a character.
                    Input as much or as little as you like and let the generator fill out the rest.
                </p>
                </div>
                <div className='flex-container'>
                    <div className='input-container'>
                        <label htmlFor='name' >Name:</label>
                        <input type='text' name='name' className='name-input'></input>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='gender'>Gender:</label>
                        <select className='gender-input' name='gender'>
                            <option value='' >--</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='race'>Race:</label>
                        <select className='race-input' name='race'>
                            <option value=''>--</option>

                            {races.map(race => <option key={race} value={race}>{race}</option>)}
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='class-type'>Class:</label>
                        <select className='class-input' name='classType'>
                            <option value=''>--</option>
                            {classToMap.map(classType => <option key={classType} value={classType}>{classType}</option>)}

                        </select>
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='roll-btn'>ROLL!</button>
                </div>
            </form>
        )
    }
}