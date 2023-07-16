import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[step, setSteps] = useState(1);
  const[isOpen, setIsOpen] = useState(true);

  const messages = [
    "Learn ReactJS",
    "Apply for jobs",
    "Invest my Incomes"
  ]


  function handlePrevious (){
   if(step > 1)   setSteps((s)  => s - 1)

  }
  function handleNext(){
    if (step < 3) setSteps((s)  => s + 1)


  }
  return (
    <div>
   
    <button className='close' onClick={() => setIsOpen(!isOpen)}>
     X
    </button>
    {isOpen &&  <div className='steps'>
            <div className="numbers">
            <div className={`${step >= 1 ? "active" : "disable"}`}>1</div>
            <div className={`${step >= 2 ? "active" : "disable"}`}>2</div>

            <div className={`${step >= 3 ? "active" : "disable"}`}>3</div>
            </div>

          <p className="message"> Step {step}: {messages[step - 1]}</p>
          

          <div className="buttons">
            <button className={`${step <= 1 ? "stop" : "active-btn"}`}  onClick={handlePrevious}>Previous</button>
            <button  className="active-btn" onClick={handleNext}>Next</button>

          </div>
          </div>}
          
          
        </div>

  )
}

export default App
