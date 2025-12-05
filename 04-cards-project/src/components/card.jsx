import React from 'react'
import { Bookmark } from 'lucide-react'

const card = (props) => {

  console.log(props);

  return (
    <div>
        <div className='card'>
            <div className="top">
                <img src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt=" logo" />
                <button>Save <Bookmark /></button>
            </div>
            <div className="center">
                <h3>{props.user} <span>{props.time}</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div className='tag'>
                    <h4>{props.tag}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$125/hours</h3>
                    <p>Mumbai</p>
                </div>
                <div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card
