import { useQuery, gql } from '@apollo/client';

const GET_ALL_ARTISTS = gql`
  query GetAllArtists {
    artists {
      id
      name
    }
  }
`;

const GET_ALL_ALBUMS = gql`
  query GetAllAlbums {
    albums {
      id
      title
      artist
      user
    }
  }
`;

function DisplayAllArtists() {
  const { loading, error, data } = useQuery(GET_ALL_ARTISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.artists.map(({ id, name }) => {
    return (
      <div key={id}>
        <h2>{name}</h2>
      </div>
    )
  })
}

function DisplayAllAlbums() {
  const { loading, error, data } = useQuery(GET_ALL_ALBUMS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error)
  };

  return data.albums.map(({ id, title, artist, user }) => {
    return (
      <div key={id}>
        <div>{title} by {artist} (owned by {user})</div>
      </div>
    )
  })
}

function App() {
  return (
    <div>
      <h1>Artists</h1>
      <br />
      <DisplayAllArtists />
      <br />
      <h1>Albums</h1>
      <br />
      <DisplayAllAlbums />
    </div>
  );
}

export default App;
