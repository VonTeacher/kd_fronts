import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">KD Albums</div>
        </Link>
        <Link to="/artists" className="ml1 no-underline black">
          [ Artists ]
        </Link>
        <Link
          to="/create-artist"
          className="ml1 no-underline black"
        >
          [ Create Artist ]
        </Link>
      </div>
    </div>
  )
}

export default Header;
