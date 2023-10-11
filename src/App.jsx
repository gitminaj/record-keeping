import { useState } from 'react'

import './App.css'
import Header from './components/Header'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])

  function captureData (){
    setData([...data, {name,email}])
    setName("")
    setEmail("")
  }

  function clearData(index){
    let arr = data;
    arr.splice(index,1)
    setData([...arr])
  }
  return (
    <>
    <div>

      <Header />
      <input 
      type="text" 
      value={name} 
      name="name" 
      id="name" 
      placeholder="Name" 
      onChange={(e)=>{setName(e.target.value)}}
      />

      <input 
      type="mail" 
      value={email} 
      name="email" 
      id="email" 
      placeholder="Eamil" 
      onChange={(e)=>{setEmail(e.target.value)}}
      />
      <button id="btn" onClick={captureData}>Add</button>
      </div>
      <div id="showdata">
        <div id="detailrow">
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Remove</h2>
        </div>
         {
          data.map((e,index) =>{
            return (
              <div id="detailrow">
              <h3>{e.name}</h3>
              <h3>{e.email}</h3>
              <button id='btnremove' onClick={()=>{clearData(index)}}>Remove</button>
              </div>
            )
          })
         }
      </div>
    </>
  )
}

export default App
