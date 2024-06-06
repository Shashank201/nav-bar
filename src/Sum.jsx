import React, { useEffect, useState } from 'react';
import { twoSum } from './helper';

const Sum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    const sum = parseFloat(num1 || 0) + parseFloat(num2 || 0);

    setResult(sum);
  };

  // ------ NOTE: This useEffect is only to call the twoSum function which is third problem
  //                  It is nowhere necessary for sum component

  useEffect(() => {
    console.log('Two sum: ', twoSum([4, 11, 17, 25], 21));
    console.log('Two sum: ', twoSum([0, 1, 2, 2, 3, 5], 0));
  }, []);

  return (
    <>
      <h1>Adding two numbers</h1>
      <div className='sumSection'>
        <input
          type='number'
          name='num1'
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type='number'
          name='num2'
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <button onClick={add}>Add two Numbers</button>
      </div>

      <div>
        <h2>Total : {result}</h2>
      </div>
    </>
  );
};

export default Sum;
