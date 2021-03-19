import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#fdd').all(5));

  const handleSubmit= (e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    }catch (error){
      setError(true)
      console.log(error)
    }
  }
  return (
    <>
      <section className="container">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e)=>{
            setColor(e.target.value)
          }}
          className={`${error ? 'error' : null}`}
          placeholder="#f15025"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index)=>{
          console.log(color)
          return (
          <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
          )
        })}
      </section>
    </>
  )
}

export default App
