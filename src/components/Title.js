import React from 'react';

class Title extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const {name, shows} = this.props;
        return (
          <div>
            
              <p>
                <h1>Hello {name}!</h1>
                <h2>Favorite TV shows</h2>
                <ul>
                    {shows.map((show) => <li>{show}</li>)}
                </ul>
              </p>
              
          </div>
        );
      }
    }
   

export default Title;