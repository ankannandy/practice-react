import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
        <Card user='Amazon' 
              time='5 Days ago'
              tag='Part Time, Senior Level'
        />
        <Card user='Google' 
              time='2 Days ago'    
              tag='Part Time, Senior Level'  
        />
        <Card user='Zomato'
              time='1 Day ago'
              tag='Full Time, Junior Level'
        />
        <Card user='Flipkart'
              time='3 Days ago'
              tag='Internship, Senior Level'
        />
    </div>
  )
}

export default App

