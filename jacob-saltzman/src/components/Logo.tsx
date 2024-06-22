import React from "react";

const Logo = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="70" fill="black" />

    {/* middle- top */}

    <line x1="100" y1="50" x2="100" y2="90" stroke="#61dafb" strokeWidth="3" />

    {/* middle- bottom */}

    <line
      x1="100"
      y1="110"
      x2="100"
      y2="150"
      stroke="#61dafb"
      strokeWidth="5"
    />

    {/* slant-middle-first */}

    <line x1="80" y1="90" x2="100" y2="110" stroke="#41dabc" strokeWidth="3" />
    {/* slant-middle-second */}

    <line x1="100" y1="90" x2="120" y2="110" stroke="#41dabc" strokeWidth="4" />
    {/* left-side */}

    <line x1="80" y1="50" x2="80" y2="130" stroke="#61dafb" strokeWidth="2" />
    {/* right-side */}

    <line x1="120" y1="70" x2="120" y2="150" stroke="#61dafb" strokeWidth="5" />

    {/* slant-top-first */}

    <line x1="80" y1="50" x2="100" y2="50" stroke="#41dabc" strokeWidth="2" />
    {/* slant-top-second */}

    <line x1="120" y1="70" x2="100" y2="50" stroke="#41dabc" strokeWidth="3" />

    {/* slant-bottom-first */}

    <line
      x1="80"
      y1="130"
      x2="100"
      y2="150"
      stroke="#41dabc"
      strokeWidth="3"
    />

    {/* bottom */}

    <line
      x1="120"
      y1="150"
      x2="100"
      y2="150"
      stroke="#61dafb"
      strokeWidth="5"
    />
  </svg>
);

export default Logo;
