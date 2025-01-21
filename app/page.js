"use client"

import React,{useState} from 'react'

function page() {
  const [count,setcount] = useState(0)
  
  return (
    <div>
      <h1>my home page</h1>
      <h3>{count}</h3>
      <button onClick={()=>setcount(count+1)}>+</button>
    </div>
  )
}

export default page
