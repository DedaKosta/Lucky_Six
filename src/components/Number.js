import React from 'react'

const Number = (props) => {
    return (
        <div className='number-cont'>
            <div className='number-circle'>
                <label className='number-circle-label'>{props.number}</label>
            </div>
            <div className='number-value'>
                <label className='number-value-label'>{props.value}</label>
            </div>
        </div>
    )
}

export default Number
