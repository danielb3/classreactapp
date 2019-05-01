import React from 'react';
import '../App.css';
import App from '../App'
import Menu from './Menu'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: '\u2764',
            active: "grey",
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(id) {
            if (this.state.active == "grey") {
                this.setState({
                    favorite: '\u2764',
                    active: "red",
                    count: this.state.count+1
                });
                
                console.log(this.state.count)
            } else {
                this.setState({
                    favorite: '\u2764',
                    active: "grey",
                    count: this.state.count-1
                });
                
                console.log(this.state.count)
            }
            
        }        

    render() {
        
        const {title, body, id} = this.props;
        return (
            <div>
                <Menu total={this.state.count} />
                <h3> {title} </h3>
                <p><i> {body} </i></p>
                <button className="btn btn-primary" style={{"background":this.state.active}} onClick={this.handleClick}>{this.state.favorite}</button>
            </div>
          );
      }
    }  

export default Title;