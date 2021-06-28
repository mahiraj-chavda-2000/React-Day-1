import React from 'react';
import Heading from './Heading';
function Navbar() {
    return (
        <><Heading />
            <div className="navbar">
            
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact US</a>
            </div>
        </>
    );
}
export default Navbar;