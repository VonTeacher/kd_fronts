import React from 'react';

const Artist = (props) => {
  const { name } = props;

  return (
    <div className="artist">
      {name}
    </div>
  )
}

export default Artist;
