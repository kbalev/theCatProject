import React, { useState }from 'react'
import './Navbar.css'

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav>
             <div className = "logo">Cats 4 You</div>
                <ul className = "nav-links" style = {{transform: open ?"translateX(0px)" : ""}}>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Shop</a>
                    </li>
                    <li>
                        <a>Help</a>
                    </li>
                    <li>
                        <a className = "basket">Your Cart</a>
                    </li>
                </ul>
                <i onClick={() => setOpen (!open)} className = "fas fa-bars burger"></i>
            </nav>
        </div>
    );
}

export default Navbar
