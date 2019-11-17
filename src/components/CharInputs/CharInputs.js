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
        let classes = nameStore.classes
        console.log('races are', races, 'genders are', genders, 'classes are', classes)
        
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
           //find race
           //find gender
           //pick name based on race + gender
            // let race = charDetails.race
            // let gender = charDetails.gender

            // let filteredRace = races.filter(race => race == charDetails.race)
            // let filteredGender = genders.filter(gender => gender == charDetails.gender)
            let nameArray = races[charDetails.race][charDetails.gender].FirstNames
            let randomFirstName = nameArray[Math.floor(Math.random() * nameArray.length)]
            
            console.log('name array', nameArray)
            console.log('first name is', randomFirstName)

           

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
                //console.log('rolls are', dieArray)
            }
            let min = dieArray.sort().shift()
            //console.log('min is', min)
            let newDieArray = dieArray
            //console.log('newdiearray', newDieArray)
            let stat = newDieArray[0] + newDieArray[1] + newDieArray[2]
            statArray.push(stat)
            //console.log('stat is', stat)
        }

        //console.log('stats array', statArray)
        charDetails.stats = statArray
        this.assignStats(charDetails)

    }

    assignStats = (charDetails) => {
        this.props.updateCurrentRoll(charDetails)
    }
    // addRaceBonus = () => {
    // 
    // }

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