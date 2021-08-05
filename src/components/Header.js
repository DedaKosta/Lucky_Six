import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-cont'>
                <img src='https://cloud.aleacontrol.com/img/logo/maxbet.png' alt='logo' />
            </div>
            <div className='header-section-cont'>
                <p className='header-section-name'>Location</p>
                <p className='header-section-value'>Pirot, Kružni Tok</p>
            </div>
            <div className='header-separator'></div>
            <div className='header-section-cont'>
                <p className='header-section-name'>Round</p>
                <p className='header-section-value'>174</p>
            </div>
            <div className='header-section-cont'>
                <p className='header-section-name'>Date</p>
                <p className='header-section-value'>05.08.2021.</p>
            </div>
            <div className='header-section-cont'>
                <p className='header-section-name'>Time</p>
                <p className='header-section-value'>16:02</p>
            </div>

            <div className='gold-bonus-cont'>

            </div>
            <div className='gold-bonus-cont-values'>
                <p className='gold-bonus-name'>👑 Gold Bonus 👑</p>
                <p className='gold-bonus-value'>124.359,74</p>
            </div>
        </header>
    )
}

export default Header
