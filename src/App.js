import React from 'react'
import NavScrollExample from './navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './products';
import './App.css'

function App() {
  return (
    <>
      <NavScrollExample />
      <div className="cards">
        <Products />
      </div>
      <div className="Hello, there!"><img src='https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/hellotherethumb.jpg'/></div>
    </>
  )
}

export default App