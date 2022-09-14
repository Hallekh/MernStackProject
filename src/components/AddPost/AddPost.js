import React from 'react'
import './AddPost.css'

export default function AddPost() {
  return (
    <div>
        <div className="container addForm">
            <form>
                <div className="mb-3">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" name="title" placeholder="Enter name of your question" required />
                </div>
                <div className="mb-3">
                <label for="exampleInputPassword1">Question</label>
                <input type="text" name="message" placeholder="Expain what exactly you need help with" required />
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
    </div>
  )
}
