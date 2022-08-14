import React from 'react';

const HomePage = () => {
  return (
    <div>
      Welcome to KD Albums.
      <br />
      <ul>
        <li className="no-bullet">
          Click [ Artists ] above to see a list.
        </li>
        <li className="no-bullet">
          Click [ Create Artist ] to add a new one to the database.
        </li>
      </ul>
    </div>
  )
}

export default HomePage;
