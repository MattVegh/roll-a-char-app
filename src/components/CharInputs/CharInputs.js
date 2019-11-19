import React, { Component } from 'react'
import './CharInputs.css'
import nameStore from '../../name-store'

export default class CharInputs extends Component {


    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const target = event.target
    //     let name = (target['name'].value) ? (target['name'].value) : 'test'
    //     let gender = (target['gender'].value) ? (target['gender'].value) : nameStore.genders[Math.floor(Math.random() * nameStore.genders.length)]
    //     let race = (target['race'].value) ? (target['race'].value) : nameStore.races[Math.floor(Math.random() * nameStore.races.length)]
    //     let classType = (target['class-type'].value) ? (target['class-type'].value) : nameStore.classes[Math.floor(Math.random() * nameStore.classes.length)]

    //     let charDetails = { name, gender, race, classType }

    //     console.log('from CharInPuts', charDetails)
    //     this.props.updateCurrentRoll(charDetails)
    //     document.querySelector('.roll-display').classList.remove('hidden')
    //     this.generateStats()

    // }

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
        //console.log('from handleSubmit', charDetails)
        this.handleInputFill(charDetails)

    };

    handleInputFill(charDetails) {
        let races = Object.keys(nameStore.races)
        let genders = nameStore.genders
        let classes = Object.keys(nameStore.classTypes)
        console.log('races are', races, 'genders are', genders, 'classes are', classes)

        if (!charDetails.gender) {
            let randomGender = genders[Math.floor(Math.random() * genders.length)]
            //console.log('random gender is', randomGender)
            charDetails.gender = randomGender;
        }

        if (!charDetails.classType) {
            let randomClass = classes[Math.floor(Math.random() * classes.length)]
            console.log('random class is', randomClass)
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

        console.log('from handleInputFill', charDetails)
        this.generateStats(charDetails)
        document.querySelector('.roll-display').classList.remove('hidden')
    }

    generateStats = (charDetails) => {
        const statArray = []

        // get random value 1-6, 4 times. drop lowest value. add 3 remaining values. push to statArray. repeat 6 times. 

        for (let i = 0; i < 6; i++) {
            const dieArray = []
            for (let j = 0; j < 4; j++) {
                let roll = Math.floor(Math.random() * 6) + 1;
                dieArray.push(roll)
                console.log('rolls are', dieArray)
            }
            dieArray.sort().shift()

            console.log('diearray', dieArray)
            let stat = dieArray[0] + dieArray[1] + dieArray[2]
            statArray.push(stat)
            console.log('stat is', stat)
        }

        console.log('stats array', statArray)
        charDetails.stats = statArray
        this.assignStats(charDetails)

    }

    assignStats = (charDetails) => {
        console.log('from assignStats', charDetails)
        charDetails.stats.sort((a, b) => a - b)
        console.log('stats', charDetails.stats)

        let topStats = nameStore.classTypes[charDetails.classType].TopStats

        //find classType
        //assign highest stats to TopStats
        //randomly assign remainingFourStats to other stats

        console.log('top stat for', charDetails.classType, 'is', topStats)

        if (topStats.length == 2) {
            console.log('class has 2 top stats')

            //gets the last 2 values (2 highest) in the sorted array
            let bestTwoStats = charDetails.stats.slice(4)
            console.log('2 highest rtats are', bestTwoStats)

            //gets the first 4 values (4 lowerst) in the sorted array
            let remainingFourStats = charDetails.stats.slice(0, 4)
            console.log('remaing 4 stats are', remainingFourStats)

            //randomly get one of the top prioritized stats and remove it from the array
            let firstStatToAssign = topStats.splice([Math.floor(Math.random() * topStats.length)], 1)
            console.log('first to assign', firstStatToAssign)

            //assign a value to the randomly gotten stat
            charDetails.stats[firstStatToAssign] = bestTwoStats.pop()
            console.log('best stat remaining', bestTwoStats, 'and', topStats)

            //assign the remaining stat the next value
            charDetails.stats[topStats] = bestTwoStats[0]

            //randomly get a non prioritized stat
            // let lesserStat = remainingFourStats.splice([Math.floor(Math.random() * topStats.length)], 1)
            // charDetails.stats[lesserStat] = charDetails.stats.splice(Math.floor(Math.random() * charDetails.stats.length), 1)[0]
            // console.log('remaining', charDetails.stats)

        }

        if (topStats.length == 1) {
            console.log('class has 1 top stat')

            let bestStat = charDetails.stats.slice(5)
            console.log('best stat is', bestStat)

            let remainingFiveStats = charDetails.stats.slice(0, 5)
            console.log('remaining 5 stats are', remainingFiveStats)

            charDetails.stats[topStats] = bestStat[0]

        }


        // if (charDetails.classType === 'Barbarian' || 'Fighter') {
        //     //top str
        //     charDetails.stats.strength = charDetails.stats.pop()
        //     console.log('str', charDetails.stats.strength)
        //     console.log('remaining', charDetails.stats)

        //     charDetails.stats.dexterity = charDetails.stats.splice(Math.floor(Math.random() * charDetails.stats.length), 1)[0]
        //     console.log('remaining', charDetails.stats)

        //     charDetails.stats.constitution = charDetails.stats.splice(Math.floor(Math.random() * charDetails.stats.length), 1)[0]
        //     console.log('remaining', charDetails.stats)

        //     charDetails.stats.intelligence = charDetails.stats.splice(Math.floor(Math.random() * charDetails.stats.length), 1)[0]
        //     console.log('remaining', charDetails.stats)

        //     charDetails.stats.wisdom = charDetails.stats.splice(Math.floor(Math.random() * charDetails.stats.length), 1)[0]
        //     console.log('remaining', charDetails.stats)

        //     charDetails.stats.charisma = charDetails.stats.splice(Math.floor(Math.random() * charDetails.stats.length), 1)[0]
        //     console.log('remaining', charDetails.stats)

        // }

        // if (charDetails.classType === 'Bard' || 'Sorcerer' || 'Warlock') {
        //     //top cha
        // }

        // if (charDetails.classType === 'Cleric' || 'Druid') {
        //     //top wis
        // }

        // if (charDetails.classType === 'Rogue') {
        //     //top dex
        // }

        // if (charDetails.classType === 'Monk') {
        //     //top dex and wis
        // }

        // if (charDetails.classType === 'Paladin') {
        //     //top str and cha
        // }

        // if (charDetails.classType === 'Ranger') {
        //     //top dex and wis
        // }

        // if (charDetails.classType === 'Wizard') {
        //     //top int
        // }

        this.addRaceBonus(charDetails)
    }

    addRaceBonus = (charDetails) => {
        console.log('from addRaceBonus', charDetails)
        // if (charDetails.race === 'Dragonborn') {
        //     charDetails.stats.strength += 2
        //     charDetails.stats.charisma++
        // }

        // if (charDetails.race === 'Dwarf') {
        //     charDetails.stats.constitution += 2
        // }

        // if (charDetails.race === 'Elf' || 'Halfling') {
        //     charDetails.stats.dexterity += 2
        // }

        // if (charDetails.race === 'Gnome') {
        //     charDetails.stats.intelligence += 2
        // }

        // if (charDetails.race === 'Half-Elf') {
        //     charDetails.stats.charisma += 2

        // }

        // if (charDetails.race === 'Half-Orc') {
        //     charDetails.stats.strength += 2
        //     charDetails.stats.constitution++
        // }

        // if (charDetails.race === 'Human') {
        //     for (let i = 0; i < charDetails.stats.length; i++) {
        //         charDetails.stats[i]++
        //     }
        // }

        // if (charDetails.race === 'Tiefling') {
        //     charDetails.stats.charisma += 2
        //     charDetails.stats.intelligence++
        // }
        this.props.updateCurrentRoll(charDetails)
    }

    render() {
        console.log('nameStore test', nameStore.races)
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