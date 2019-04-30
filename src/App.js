import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import posts from './posts';

function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        
          {posts.map((p, i) => {
            return (
              <div className="col-md-4" style={{padding: "10px"}}>
              <Title title = {p.title} body = {p.body} id = {p.id} />
              </div>
        )
      })}
      </div>
    </div>
  
  );
}

export default App;
