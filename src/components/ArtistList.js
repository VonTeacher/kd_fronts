import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Artist from './Artist';

const GET_ALL_ARTISTS = gql`
  query GetAllArtists {
    artists {
      id
      name
    }
  }
`;

const ArtistList = () => {
  const { loading, error, data } = useQuery(GET_ALL_ARTISTS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data && (
        <>
          {data.artists.map(artist => (
            <Artist key={artist.id} name={artist.name} />
          ))}
        </>
      )}
    </div>
  )
}

export default ArtistList;
