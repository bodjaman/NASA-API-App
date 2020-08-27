import React from "react";

const Header = (props) => {
  return (
    <header>
      <nav>
        <a
          href="https://github.com/bodjaman/NASA-API-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/icon-github.png"
            id="icon-github"
            alt="Github Repository"
          />
        </a>
      </nav>
      <h1>Only Curious</h1>
    </header>
  );
};

export default Header;
