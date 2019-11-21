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
        console.log('from handleSubmit', charDetails)
        this.handleInputFill(charDetails)

    };

    handleInputFill(charDetails) {
        let races = Object.keys(nameStore.races)
        let genders = nameStore.genders
        let classes = Object.keys(nameStore.classTypes)
        //console.log('races are', races, 'genders are', genders, 'classes are', classes)

        if (!charDetails.gender) {
            let randomGender = genders[Math.floor(Math.random() * genders.length)]
            //console.log('random gender is', randomGender)
            charDetails.gender = randomGender;
        }

        if (!charDetails.classType) {
            let randomClass = classes[Math.floor(Math.random() * classes.length)]
            //console.log('random class is', randomClass)
            charDetails.classType = randomClass
        }

        if (!charDetails.race) {
            let randomRace = races[Math.floor(Math.random() * races.length)]
            //console.log('random race is', randomRace)
            charDetails.race = randomRace
        }

        if (!charDetails.name) {

            let firstNameArray = nameStore.races[charDetails.race].Gender[charDetails.gender].FirstNames
            let randomFirstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)]

            let lastNameArray = nameStore.races[charDetails.race].LastNames
            let randomLastName = lastNameArray ? lastNameArray[Math.floor(Math.random() * lastNameArray.length)] : ''

            charDetails.name = `${randomFirstName} ${randomLastName}`

            // console.log('firstname array', firstNameArray)
            // console.log('lastName array', lastNameArray)
            // console.log('first name is', randomFirstName)
            // console.log('last name', randomLastName)



        }

        //console.log('from handleInputFill', charDetails)
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
                //console.log('rolls are', dieArray)
            }
            dieArray.sort().shift()

            //console.log('diearray', dieArray)
            let stat = dieArray[0] + dieArray[1] + dieArray[2]
            statArray.push(stat)
            originalRollsArray.push(stat)
            //console.log('stat is', stat)
        }

        //console.log('stats array', statArray)
        charDetails.stats = statArray
        charDetails.originalRolls = originalRollsArray
        //console.log('originalRolls array is', charDetails.originalRolls)

        this.assignStats(charDetails)

    }

    assignStats = (charDetails) => {
        console.log('from assignStats', charDetails)
        console.log('stats', charDetails.stats)

        let statNames = nameStore.statNames
        // console.log('stat names are', statNames)

        let topStats = nameStore.classTypes[charDetails.classType].TopStats

        //randomize the top stats for classes that have 2 priorities
        if (Math.floor(Math.random() * 1) == 0) {
            topStats.sort((a, b) => a - b)
        } else {
            topStats.sort((a, b) => b - a)
        }

        //console.log('top stat for', charDetails.classType, 'is', topStats)

        //assign value to the prioritized stat(s)
        topStats.forEach(stat => {
            //console.log('stat is', stat)

            let topRoll = Math.max(...charDetails.stats)
            charDetails.stats.splice(charDetails.stats.indexOf(topRoll), 1)
            charDetails.stats[stat] = topRoll
            charDetails.originalRolls[stat] = topRoll

            // console.log('top roll is', topRoll)
            // console.log('char details', charDetails.stats)
        });

        //console.log('remaning stats', charDetails.stats)

        //assign values to the remaining stats
        statNames.forEach(stat => {
            if (!charDetails.stats[stat]) {
                //console.log('statNames stat is', stat)

                let roll = charDetails.stats[Math.floor(Math.random() * charDetails.stats.length)]
                charDetails.stats.splice(charDetails.stats.indexOf(roll), 1)
                charDetails.stats[stat] = roll
                charDetails.originalRolls[stat] = roll

                //console.log('rollll', roll)
                //console.log('remaning stats', charDetails.stats)
            }
        })
        this.addRaceBonus(charDetails)
    }

    addRaceBonus = (charDetails) => {
        //console.log('from addRaceBonus', charDetails)

        let statBonuses = nameStore.races[charDetails.race].statBonus
        //console.log('stat bonuses are', statBonuses)

        let statBonusName = Object.keys(nameStore.races[charDetails.race].statBonus)
        let statBonusValue = Object.values(nameStore.races[charDetails.race].statBonus)
        console.log('stat bonuses for', charDetails.race, 'are', statBonusName, 'with a value of', statBonusValue)
        //console.log('stats for current character are', charDetails.stats)

        statBonusName.forEach(stat => {
            //console.log('stat to modify is', stat)
            //console.log('statbonusvalue', statBonusValue[0])

            let modifiedStat = charDetails.stats[stat] + statBonusValue.shift()
            charDetails.stats[stat] = modifiedStat
            //console.log(stat, 'after modifying is', modifiedStat)
        });

        if (charDetails.race == 'Half-Elf') {

            let i = 0;
            let previousStat;
            while (i < 2) {
                let extraStat = nameStore.statNames[Math.floor(Math.random() * nameStore.statNames.length)]
                //console.log('extra stat is', extraStat)
                //console.log('extra stats value is', charDetails.stats[extraStat])


                if (extraStat !== 'charisma' || previousStat) {
                    charDetails.stats[extraStat] += 1
                    //console.log('extra stats value after bonus is', charDetails.stats[extraStat])
                    i++
                    previousStat = extraStat
                    //console.log('prev stat is', previousStat)
                }

            }
        }

        this.calculateModifier(charDetails)
    }

    calculateModifier = (charDetails) => {
        console.log('in calc mod', charDetails)
        console.log('calc mod', charDetails.stats)
        console.log('calc mod map', Object.keys(charDetails.stats).map(stat => charDetails.stats[stat]))

        let modifiers = []


        Object.keys(charDetails.stats).map(stat => {
            if (charDetails.stats[stat] > 3 && charDetails.stats[stat] < 6) {
                console.log('calc mod -3 for', charDetails.stats[stat])
                modifiers.push('-3')
                console.log('the mods are', modifiers)

            } else if (charDetails.stats[stat] > 5 && charDetails.stats[stat] < 8) {
                console.log('calc mod -2 for', charDetails.stats[stat])
                modifiers.push('-2')
                console.log('the mods are', modifiers)

            } else if (charDetails.stats[stat] > 7 && charDetails.stats[stat] < 10) {
                console.log('calc mod -1 for', charDetails.stats[stat])
                modifiers.push('-1')
                console.log('the mods are', modifiers)

            } else if (charDetails.stats[stat] > 9 && charDetails.stats[stat] < 12) {
                console.log('calc mod 0 for', charDetails.stats[stat])
                modifiers.push('0')
                console.log('the mods are', modifiers)

            } else if (charDetails.stats[stat] > 11 && charDetails.stats[stat] < 14) {
                console.log('calc mod +1 for', charDetails.stats[stat])
                modifiers.push('+1')
                console.log('the mods are', modifiers)

            } else if (charDetails.stats[stat] > 13 && charDetails.stats[stat] < 16) {
                console.log('calc mod +2 for', charDetails.stats[stat])
                modifiers.push('+2')
                console.log('the mods are', modifiers)

            } else if (charDetails.stats[stat] > 15 && charDetails.stats[stat] < 18) {
                console.log('calc mod +3 for', charDetails.stats[stat])
                modifiers.push('+3')
                console.log('the mods are', modifiers)

            } else if (charDetails.stats[stat] > 17 && charDetails.stats[stat] < 20) {
                console.log('calc mod +4 for', charDetails.stats[stat])
                modifiers.push('+4')
                console.log('the mods are', modifiers)

            }
        })

        this.props.updateCurrentRoll(charDetails)
    }


    render() {
        // let classTypes = Object.keys(nameStore)
        // let races = Object.keys(nameStore.races)
        // console.log('classTypes are', classTypes)
        // console.log('nameStore test', nameStore.races)
        return (
            <form className='char-inputs' onSubmit={this.handleSubmit}>
                <div className='name-gender-box'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='name-input'></input>

                    <label htmlFor='gender'>Gender:</label>
                    <select className='gender-input' name='gender'>
                        <option value=''>--</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div>

                <label htmlFor='race'>Race:</label>
                <select className='race-input' name='race'>
                    <option value=''>--</option>
                    {/* {races.map(race => (<option value={races[race]}>{races[race]}</option>))} */}
                    <option value='Dragonborn'>Dragonborn</option>
                    <option value='Dwarf'>Dwarf</option>
                    <option value='Elf'>Elf</option>
                    <option value='Gnome'>Gnome</option>
                    <option value='Half-Elf'>Half-Elf</option>
                    <option value='Halfling'>Halfling</option>
                    <option value='Half-Orc'>Half-Orc</option>
                    <option value='Human'>Human</option>
                    <option value='Tiefling'>Tiefling</option>
                </select>

                <label htmlFor='class-type'>Class:</label>
                <select className='class-input' name='classType'>
                    <option value=''>--</option>
                    {/* {classTypes.map(classType => (<option value={classTypes[classType]}>{classTypes[classType]}</option>))} */}
                    <option value='Barbarian'>Barbarian</option>
                    <option value='Bard'>Bard</option>
                    <option value='Cleric'>Cleric</option>
                    <option value='Druid'>Druid</option>
                    <option value='Fighter'>Fighter</option>
                    <option value='Monk'>Monk</option>
                    <option value='Paladin'>Paladin</option>
                    <option value='Ranger'>Ranger</option>
                    <option value='Rogue'>Rogue</option>
                    <option value='Sorcerer'>Sorcerer</option>
                    <option value='Warlock'>Warlock</option>
                    <option value='Wizard'>Wizard</option>
                </select>

                <button >ROLL!</button>
            </form>
        )
    }
}