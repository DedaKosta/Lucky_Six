import React from 'react'

const NumberInner = (props) => {
    return (
        <div className='number-cont2'>
            <div className={props.class}>
                <label className='number-circle-label'>{props.number}</label>
            </div>
        </div>
    )
}

export default NumberInner
