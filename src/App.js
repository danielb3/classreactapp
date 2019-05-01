import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Menu from './components/Menu'
import posts from './posts';

class App extends React.Component {
  constructor(props) {
    super(props);
  };
  handleStateChange = (count) => {
    console.log("count", count);
  }
render() {
  const {count} = 3;
  
  return (
    <div className="container-fluid">
    <Menu total = {count} />
      <div className="row">
        
          {posts.map((p, i) => {
            return (
              <div className="col-md-4" style={{padding: "10px"}}>
              <Title title = {p.title} body = {p.body} id = {p.id} handleStateChange={this.handleStateChange} />
              </div>
        )
      })}
      </div>
    </div>
  
  );
}

}
  

export default App;
