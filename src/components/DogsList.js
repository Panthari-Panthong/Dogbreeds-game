import * as React from 'react'


export default function DogsList(props) {


  return (
    <div>
      <h1>List all dog breeds</h1>
      There are {props.breeds.length} dog breeds.
      <ul>
        {props.breeds.map(breed =>
          <li key={breed}>{breed}</li>
        )}
      </ul>

    </div>
  )
}

