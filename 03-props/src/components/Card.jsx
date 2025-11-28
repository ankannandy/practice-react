import React from 'react'

const card = (props) => {

  console.log(props);

  return (
    <div>
        <div className='card'>
          <h1>{props.user}</h1>
          <p>{props.description}</p>
          <button>view profile</button>
        </div>
    </div>
  )
}

export default card
