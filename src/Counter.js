import React from 'react'
import {useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('mounting...');
        console.log('updating',count);
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Add</button>
      <h1>this is component:{count}</h1>
    </div>
  )
}

export default Counter
