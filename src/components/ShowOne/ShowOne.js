import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import './ShowOne.css'
import axios from '../../axios'

export default function ShowOne() {
    const [question, setquestion] = useState([])
  React.useEffect(() => {
    axios.get('/question/62fe8f1f34943467233f04ef')
    .then( (res) => {

        console.log(res.data)
    }).catch( err => console.log(err))

  }, []);
    return (
              
        <div>

            <div className="container">
                <div className="card-header">
                card-header
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            card-title
                        </h5>
                        <p className="card-text">
                        card-text
                        </p>
                        <Link to='/question/delete/' className="btn btn-warning">Delete</Link>
                        <Link to='/question/edit/' className="btn btn-primary">Update</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}