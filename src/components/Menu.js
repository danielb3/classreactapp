import React from 'react';
import '../App.css';



class Menu extends React.Component {

    render() {
        const {total} = this.props;
        return (
            <nav className="menu navbar navbar-expand-lg navbar-light bg-light">
                <a className="menuName navbar-brand" href="#">Quote Me</a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="menuLinkUl navbar-nav ">
                    <li className="nav-item active">
                        <a className="menuLink nav-link" href="#">Favorites = <span>{total}</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
          );
      }
    }  

export default Menu;