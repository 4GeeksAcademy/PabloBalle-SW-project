import React, { useState, useEffect } from "react";  // 1. importar useContext
import { Spinner } from "../component/Spinner.jsx";
// 2. importar Context desde appContext

export const Posts = () => {
  // 3. [store, actions] desestructurar el useContext()
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('postsLocal')));  // post es un ESTADO de REACT
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("usersLocal")));

  return (
    <div className="container">
      <h1 className="text-primary">Posts</h1>
      {!posts || !users ? 
        <Spinner/>
      :
        posts.map((post) => 
          <div className="card text-start">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <h6 className="card-subtitle text-danger">{users[post.userId - 1].name}</h6>
              <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer text-end">
              <button className="btn btn-danger" onClick={() => {}}>
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}