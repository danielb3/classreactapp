import React from 'react';
import './App.css';
import Title from './components/Title';
import Menu from './components/Menu'
import posts from './posts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countA: 0
  };
  };

  handleStateChange = (count) => {
    if (count === 1) {
      this.setState(prevState => ({ countA: prevState.countA + 1 }), this.loadData)
      console.log("up count " + count)
    } else if (count === 2) {
      this.setState(prevState => ({ countA: this.state.countA - 1 }), this.loadData)
      console.log("down count " + count)
    }
  }
  
render() {
  return (
    <div className="container-fluid">
    <Menu total = {this.state.countA} />
      <div className="row">
        
          {posts.map((p, i) => {
            return (
              <div className="col-md-4" style={{padding: "10px"}} key={i}>
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
