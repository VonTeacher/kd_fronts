import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_ARTIST_MUTATION = gql`
  mutation CreateArtistMutation($name:String!) {
    createArtist(input: { name:$name }) {
      artist {
        id
        name
        slug
      }
    }
  }
`;

const CreateArtist = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: ''
  });

  const [createArtist] = useMutation(CREATE_ARTIST_MUTATION, {
    variables: {
      name: formState.name
    },
    onCompleted: () => navigate("/artists")
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createArtist();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Enter an artist name"
          />
        </div>
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateArtist;
