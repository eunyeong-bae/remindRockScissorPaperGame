import React, { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandBackFist,faHandScissors, faHand} from '@fortawesome/free-regular-svg-icons';

const handIcon = new Map()
  .set('rock', faHandBackFist)
  .set('scissor', faHandScissors)
  .set('paper', faHand)

const Box = ({title, handType, result}) => {
    const userResult = result === 'Tie' ? 'Tie' : result ? 'Winner' : 'Lose';
    const computerResult = result === 'Tie' ? 'Tie' : !result ? 'Winner' : 'Lose';
    
    return (
    <div className={`d-flex box ${title === 'You' ? userResult : computerResult}`}>
        <h3>{title}</h3>
        <FontAwesomeIcon 
            style={{border:'none'}} 
            className='box-icon' 
            icon={handIcon.get(handType)} size="2xl" 
        />
        <p>{title === 'You' ? userResult : computerResult}</p>
    </div>
  )
}

export default Box
