import React from "react";
let url = "#";

function Header() {
  return (
    <div>
      <header>
        <h1>Welcome to my website!</h1>
        <nav>
          <ul>
            <li>
              <a href={url}>Home</a>
            </li>
            <li>
              <a href={url}>About</a>
            </li>
            <li>
              <a href={url}>Services</a>
            </li>
            <li>
              <a href={url}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
