import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='navbar_component'>
                <div className='navbar_logo'></div>
                <div className='navbar_locator'>
                    <div className='navbar_locatorImage'></div>
                    <div className='navbar_location'>Batticaloa</div>
                </div>
            </div>
        );
    }
}

export default NavBar;