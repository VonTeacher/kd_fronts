import React from 'react';
import ArtistList from './ArtistList';
import './../styles/App.css';

// const GET_ALL_ALBUMS = gql`
//   query GetAllAlbums {
//     albums {
//       id
//       title
//       artist
//       user
//     }
//   }
// `;

// function DisplayAllArtists() {
//   const { loading, error, data } = useQuery(GET_ALL_ARTISTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.artists.map(({ id, name }) => {
//     return (
//       <div key={id}>
//         <h2>{name}</h2>
//       </div>
//     )
//   })
// }

// function DisplayAllAlbums() {
//   const { loading, error, data } = useQuery(GET_ALL_ALBUMS);

//   if (loading) return <p>Loading...</p>;
//   if (error) {
//     console.log(error)
//   };

//   return data.albums.map(({ id, title, artist, user }) => {
//     return (
//       <div key={id}>
//         <div>{title} by {artist} (owned by {user})</div>
//       </div>
//     )
//   })
// }

function App() {
  return (
    <>
      <ArtistList />
    </>
  );
}

export default App;
