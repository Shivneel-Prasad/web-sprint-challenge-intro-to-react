// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;

    h1:hover {
        color: indigo;
        background-color: lavender;
    }

    p:hover {
        font-family: 'Pacifico';
        font-weight: bold;
        font-size: x-large;
    }
`

export default function Character(props) {
    const { data } = props

    return (
        <Container>
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
        </Container>
    )
}