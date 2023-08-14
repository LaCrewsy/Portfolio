import React from 'react';
import { NavMenuItems } from './NavMenuItems';
import "./Navbar.css"
class NavBar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Lachlan Crews</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavMenuItems.map((item, index) =>{
                        return (
                            <l1 key={index}><a className={item.cName} href={item.url}>{item.title}</a></l1>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;