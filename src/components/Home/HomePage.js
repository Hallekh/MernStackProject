import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import axios from '../../axios'

export default function HomePage() {
  const [message, setmessage] = useState([])
  React.useEffect(() => {
    axios.get('/')
    .then( async(res) => {
      await setmessage(res.data)
    }).catch( err => console.log(err))

  }, []);
  
  return (
    <div>
        {message.map( (item) => {
          return <div className="card" key={item._id}>
            <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.message}</p>
            <p>{item.createdAt}</p>
            <Link to={/question/ + item._id} className="card-link">See More</Link>
            </div>
          </div>
        })}
        
    </div>
  )
}
