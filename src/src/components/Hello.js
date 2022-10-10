import React from 'react'

const Hello=()=>{
    // return (
    //     <div>
    //         <h1> Hey learn jsx</h1>
    //     </div>
    // )

return React.createElement('div',null,React.createElement('h1',null,'Hey learn jsx'))
}
export default Hello