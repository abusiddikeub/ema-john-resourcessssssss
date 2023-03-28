import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Product from './component/Product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header></Header>
    <Product></Product>
    </div>
  )
}

export default App;
