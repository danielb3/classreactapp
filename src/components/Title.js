import React from 'react';
import '../App.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favorite: "Click to add to favorites" };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(id) {
            if (this.state.favorite == "Click to add to favorites") {
                this.setState({
                    favorite: "Favorite"
                });
                    console.log("true");
            } else {
                this.setState({
                    favorite: "Click to add to favorites"
                });
                    console.log("false");
            }
            
        }

    render() {
        
        const {title, body, id} = this.props;
        return (
            <div>
                <h3> {title} </h3>
                <p> {body} </p>
                <button className="btn btn-primary" onClick={this.handleClick}>{this.state.favorite}</button>
            </div>
          );
      }
    }  

export default Title;