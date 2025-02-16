import React from "react";
import { useState } from "react";
import './Navbar.css'

export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Home');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
    return (
        <nav>
            <a href="" className="logo">informatician</a>
            <div>
                <ul id="nav-items" className={clicked? "#nav-items nav-active": "#nav-items"} style={{marginBottom:0}}>
                    <li><a href="/" className={selectedOption === 'Home' ? 'active' : ''} onClick={() => handleOptionClick('Home')}>Home</a></li>
                    <li><a href="/books" className={selectedOption === 'books' ? 'active' : ''} onClick={() => handleOptionClick('books')}>Books</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <div className="search-container search-mobile-view">
                        <form action="" className="search-bar">
                            <input type="text" placeholder="search..." name="q" />
                            <button type="submit"><i className="fa-solid fa-search"></i></button>
                        </form>
                    </div>
                </ul>
            </div>
            <div className="search-container search-web-view">
                <form action="" className="search-bar">
                    <input type="text" placeholder="search..." name="q" />
                    <button type="submit"><i className="fa-solid fa-search"></i></button>
                </form>
            </div>
            
            <div id="mobile">
            <i id="bar" className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={() => setClicked(!clicked)}></i>
            </div>
        </nav>
    );
}