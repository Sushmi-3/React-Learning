import React, {useState} from 'react'

function UseCounter() {

const[count , setCount] = useState(0)

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default UseCounter