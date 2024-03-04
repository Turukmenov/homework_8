import React, { useState, useCallback } from 'react'

export default function App () {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
      <h1>Счетчик: {count}</h1>
      {}
      <button style={{backgroundColor: "#b781f3", border: "none", width: "120px", borderRadius: "10px", color: "white", fontSize: "24px"}} onClick={increment}>CLICK</button>
    </div>
  )
}
