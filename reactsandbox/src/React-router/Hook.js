import React, {useState} from 'react'

function Hooks() {
    // It returns a pair of values: the current state and a function that updates it.
  const [count, setCount] = useState(0)
    
    return (
        <div>
            <button onClick={()=> setCount(count +1)}> Increment {count}</button>
            </div>
    )
}

export default Hooks