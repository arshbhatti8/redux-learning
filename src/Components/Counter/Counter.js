import React from 'react';
import RandomNumber from '../RandomNumber/RandomNumber';

const randomNumberString = "";

const Counter = ({randomNumber,value,increment,decrement,randomNumberString}) => {
    return(
        <div>
            <h3>React-Redux based Counter app that increments/decrements a counter with random numbers</h3>
            <p>Newly generated random number : {randomNumber}</p>
            <p>History:[{randomNumberString}]</p>
            <p>Counter:{value}</p>
            <input type="button" value="Increment" onClick={increment}/>
            <input type="button" value="Decrement" onClick={decrement}/>
        </div>
    )

}

export default Counter;