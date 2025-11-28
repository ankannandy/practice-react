import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
        <Card user='Aman' 
              age={18}
              description='Hi I am Aman'
        />
        <Card user='Ankan' 
              age={21}
              description='Hi I am Ankan'
        />
    </div>
  )
}

export default App
