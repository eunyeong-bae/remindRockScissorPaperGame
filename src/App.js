import './App.css';
import Box from './component/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandBackFist, faHandScissors, faHand} from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

const choiceHandType = ['rock', 'scissor','paper'];

function App() {
// 6. 박스 테두리가 결과에 따라 색이 변한다. 
//     1. 지면 빨간색, 이기면 초록색, 비기면 검정색
  const [handType, setHandType] = useState('rock'); 
  const [computerHandType, setComputerHandType] = useState('rock');
  const [isResult, setIsResult] = useState(false);

  useEffect(() => {
    handTypeChange(handType);
  }, []);

  const handTypeChange = (type) => {
    setHandType(type);

    let randomNum = Math.floor(Math.random() * choiceHandType.length);
    setComputerHandType(choiceHandType[randomNum]);

    let result = playGameResult(type, choiceHandType[randomNum]);
    setIsResult(result);
  };

  const playGameResult = (userHandType, computerHandType) => {
    if(userHandType === 'rock'){
      if(computerHandType === 'scissor'){
        return true;
      } else if( computerHandType === 'paper'){
        return false;
      }
    } else if(userHandType === 'scissor'){
      if(computerHandType === 'rock'){
        return false;
      }else if( computerHandType === 'paper'){
        return true;
      }
    } else if(userHandType === 'paper'){
      if(computerHandType === 'scissor'){
        return false;
      }else if(computerHandType === 'rock'){
        return true;
      }
    }
    
    return 'Tie';
  };

  return (
    <div className='d-flex container'>
      <div className='d-flex box-wrap'>
        <Box title={'You'} handType={handType} result={isResult}/>
        <p>VS</p>
        <Box title={'Computer'} handType={computerHandType} result={isResult}/>
      </div>
      <div className='d-flex hand-wrap'>
        <FontAwesomeIcon 
          onClick={handTypeChange.bind(this,'rock')}
          className='box-icon' 
          icon={faHandBackFist} size="2xl" 
        />
        <FontAwesomeIcon 
          onClick={handTypeChange.bind(this,'scissor')}
          className='box-icon' 
          icon={faHandScissors} size="2xl" 
        />
        <FontAwesomeIcon 
          onClick={handTypeChange.bind(this,'paper')}
          className='box-icon' 
          icon={faHand} size="2xl" 
        />
      </div>
    </div>
  );
}

export default App;