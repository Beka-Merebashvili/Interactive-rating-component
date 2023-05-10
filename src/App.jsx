import { useState } from 'react'
import './App.css'
import Rate from './components/Rate' 
import Result from './components/Result'


function App() {
const [submit , setSubmit] = useState(false);
const [rate , setRate] = useState();
  return (
    <div className='app'>
      {submit ? <Result rate={rate} /> : <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />}
    </div>
  )
     
}

export default App
