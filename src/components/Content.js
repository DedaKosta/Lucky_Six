import React from 'react'
import Number from './Number'

const Content = () => {
    return (
        <div className='full-content-cont'>
            <div className='content-left'>
                <div className='numbers-cont'>
                    <Number number='' value='10.000' />
                    <Number number='' value='7.500' />
                    <Number number='' value='5.000' />
                    <Number number='' value='2.500' />
                    <Number number='' value='1.000' />
                    <Number number='' value='500' />
                    <Number number='' value='300' />
                    <Number number='' value='200' />
                </div>
                <div className='numbers-cont'>
                    <div className='left-right-margin-cont'></div>
                    <Number number='' value='150' />
                    <Number number='' value='100' />
                    <Number number='' value='90' />
                    <Number number='' value='80' />
                </div>
            </div>
            <div className='content-middle'>
                <div className='numbers-selector-cont'>
                    <div className='selector-cont'>

                    </div>
                    <div className='first-numbers-cont'>

                    </div>
                </div>
                <div className='numbers-middle-cont'>
                    <div className='numbers-cont'>
                        <div className='middle-margin-cont'></div>
                        <Number number='' value='70' />
                        <Number number='' value='60' />
                        <Number number='' value='50' />
                    </div>
                    <div className='numbers-cont'>
                        <div className='middle-margin-cont'></div>
                        <Number number='' value='40' />
                        <Number number='' value='30' />
                        <Number number='' value='25' />
                    </div>
                </div>
            </div>
            <div className='content-right'>
                <div className='numbers-cont'>
                    <div className='left-right-margin-cont'></div>
                    <Number number='' value='20' />
                    <Number number='' value='15' />
                    <Number number='' value='10' />
                    <Number number='' value='9' />
                </div>
                <div className='numbers-cont'>
                    <Number number='' value='8' />
                    <Number number='' value='7' />
                    <Number number='' value='6' />
                    <Number number='' value='5' />
                    <Number number='' value='4' />
                    <Number number='' value='3' />
                    <Number number='' value='2' />
                    <Number number='' value='1' />
                </div>
            </div>
        </div>
    )
}

export default Content
