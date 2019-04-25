import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

function App() {
  let user = {
    name: "Sam",
    shows: [
      'The Big Bang Theory',
      'Modern Family',
      'NCIS'
    ]
  }
  return (
    <div>
      <Title name={user.name} shows={user.shows}/>
    </div>
  );
}

export default App;
