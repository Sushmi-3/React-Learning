import React ,{useState} from 'react'

function StateWArray() {
    const[items,setItems]=useState([])

    const addItem = () => {
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10)+1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
     <ul>
        {items.map(item => (
            <li ley={item.id}>{item.value}</li>
        ))}
     </ul>
    </div>
  )
}

export default StateWArray