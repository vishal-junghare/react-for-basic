import React, { useState } from 'react'

function App() {
  var[a,b]= useState("I love you");
  return (
    <div className='w-full h-screen bg-red-900 p-4 '>
    <h1>{a}</h1>
    <button  onClick={()=> b(a+1)} className='px-3 py-4 text-green-600 bg-black border-45'>click</button>
    </div>
  )
}

export default App