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
render() {
  const {count} = this.props;
  return (
    <div className="container-fluid">
    <Menu total = {count} />
      <div className="row">
        <h1>{this.onUpdate.bind(this)}</h1>
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
onUpdate (data) { this.setState({ data }) }
}
  

export default App;
