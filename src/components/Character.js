// Write your Character component here
import React from 'react'

export default function Character(props) {
    const { data } = props

    return (
        <div>
          {data.map((roles, idx) => {
            return (
                <div key={idx} >
                  <h1>Name: {roles.name}</h1>
                  <p>Gender: {roles.gender}</p>
                  <p>Height: {roles.height}</p>
                  <p>Mass: {roles.mass}</p>
                  <p>Birth Year: {roles.birth_year}</p>
                  <p>Eye Color: {roles.eye_color}</p>
                  <p>Hair Color: {roles.hair_color}</p>
                  <p>Skin Color: {roles.skin_color}</p>
                </div>
              )
          })}
        </div>
    )
}