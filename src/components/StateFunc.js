import React ,{useState}from 'react'

function StateFunc() {

const [count , setCount] = useState(0)

  return (
    <div>State Function components
    <button onClick={() => setCount(count +1)}> Functional Count{count}</button>
    </div>
  )
}

export default StateFunc