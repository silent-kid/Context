import React from 'react'
import Comp1 from './Comp1'
import { useContext } from 'react'
import { counterContext } from '../Context/context';

const Button = () => {
    const {setCount} = useContext(counterContext);
  return (
    <>
    <button onClick={() => setCount(prev => prev + 1)}>Button</button>
    <Comp1/>
    </>
  )
}

export default Button