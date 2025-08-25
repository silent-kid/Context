import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../Context/context';

const Comp1 = () => {
    const {count} = useContext(counterContext);
  return (
    <div>{count}</div>
  )
}

export default Comp1