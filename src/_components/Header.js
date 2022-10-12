import React from "react";

const Header = () => {
  return (
    <header class="intro">
      <h1 class="intro__hello">
        Hello!
        <span class="emoji wave-hand animated"></span>
      </h1>

      <h2 class="intro__tagline">
        I'm
        <span class="name"> Aytaç Öntürk</span>, a software engineer and R&D enthusiast focused on creating beautiful experiences.
        <span class="emoji technologist"></span>
      </h2>

      <h3 class="intro__contact">
        <span>Get in touch </span>
        <span class="emoji pointer"></span>
        <span>
          <a
            href="mailto:aytconturk@gmail.com"
            target="_blank"
            class="highlight-link"
          >
            aytconturk@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
};

export default Header;
