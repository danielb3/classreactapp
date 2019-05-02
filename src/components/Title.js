import React from 'react';
import '../App.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: 'Add to Favorites',
            active: "grey",
            count: 1
        };
        this.handleClick = this.handleClick.bind(this);
      }

      increment() {
        this.setState(prevState => ({ count: prevState.count + 1 }), this.loadData)
        // ((state) => {
        //     return {count: 1}
        //   });
        
        // this.setState(prevState => ({
        //     count: 1,
        // }), this.loadData)
      }

      decrement() {
        this.setState(prevState => ({ count: prevState.count - 1 }), this.loadData)
        // ((state) => {
        //     return {count: 0}
        //   });
        
        // this.setState(prevState => ({
        //     count: -1,
        // }), this.loadData)
      }

      handleClick(id) {
            if (this.state.active === "grey") {
                this.setState({
                    favorite: '\u2764',
                    active: "red",
                    // count: this.state.count+1
                });
                this.props.handleStateChange(this.state.count);
                this.increment();
                console.log(this.state.count)
            } else {
                this.setState({
                    favorite: 'Add to Favorites',
                    active: "grey",
                    // count: this.state.count+1
                });
                this.props.handleStateChange(this.state.count);
                this.decrement();
                console.log(this.state.count)
            }
            
        }        

    render() {
        
        const {title, body} = this.props;
        return (
            <div className="quotes">
                {/* <Menu total={this.state.count} /> */}
                <h3><i> {title} </i></h3>
                <p>-{body}</p>
                <button className="btn btn-primary" style={{"background":this.state.active}} onClick={this.handleClick}>{this.state.favorite}</button> &nbsp;&nbsp;&nbsp;
               
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text={`${title} by ${body}`} data-size="large" data-lang="en" data-show-count="false">Tweet</a>
                
            </div>
          );
      }
    }  

export default Title;