import React from 'react'
import './InfoPage.css'

export default function InfoPage() {
    return (
        <div className='info-page'>
            <header>
                <h2>Frequently Asked Questions</h2>
            </header>
            <section className='question-list'>
                <div className='question-container'>
                    <h4 className='question'>What edition are these rules from?</h4>
                    <p className='answer'>5th edition.</p>
                </div>
                <div className='question-container'>
                    <h4 className='question'>How are the stat values calculated?</h4>
                    <p className='answer'>Four 6-sided dice are rolled, removing the lowest value and adding the rest together. That is one value, repeat six times.</p>
                </div>
                <div className='question-container'>
                    <h4 className='question'>How are the stat values assigned?</h4>
                    <p className='answer'>Based on the class's priority. For example a Barbarian's main stat is strength so the highest rolled value will be assigned to strength.</p>
                </div>
                <div className='question-container'>
                    <h4 className='question'>What is the bonus?</h4>
                    <p className='answer'>Each race has a bonus to specific stats. For example a Half-Orc gets an additional two strength and one constitution.</p>
                </div>
                <div className='question-container'>
                    <h4 className='question'>What is the mod and where did the value come from?</h4>
                    <p className='answer'>The modifier is what you add to your rolls during gameplay when rolling for that stat. If during play you need to roll a strength check and you have a modifier of +1, if you roll a 12 it will count as a 13.</p>
                    <p className='answer'>The value of the modifier is based on the total for the stat. A quick way to get it would be to take the stat, subtract 10 and divide by 2, rounding down.</p>
                </div>

            </section>
        </div>
    )
}