import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';
import Form from './Form'

const initialWorkers = [
  {
    id: uuid(),
    name: 'Harper',
    email: 'harper@harper.com',
    role: 'Student',
  },
  
]

const initialWorkerValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [worker, setWorker] = useState(initialWorkers)
  const [incomplete, setIncomplete] = useState(' ')

  const [selection, setSelection] = useState(initialWorkerValues)

  const onInputChange = evt => {

    // Pulls the name and value of the input from the event object

    const { name,value } = evt.target

    setSelection({
      // copy here all the current values of the form
      // change the [name] property to be the value
      ...selection,
      [name]: value,
    })

  }

  const onSubmit = evt => {

    evt.preventDefault()

    if (!selection.name || !selection.email || !selection.role){
      setIncomplete('Must fill out the whole form!')
      return
    }

    const newWorker = { ...selection, id: uuid() }

    setWorker(worker => [newWorker, ...worker])

    setSelection(initialWorkerValues);
  }

  return (
    <div className="App">
      <span style={{color:'red'}}>{incomplete}</span>
      
    <Form 
    onInputChange={onInputChange}
    onSubmit={onSubmit}
    values={selection}
    />

      
    </div>
  );
}

export default App;
