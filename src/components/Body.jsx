import React from 'react'
import CreateChar from './Character'
import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`
export default function Body(props) {

    console.log(props.charList)
  return (
    <>
        <h1>Personagens do Rick and Morty (vivos ou mortos)</h1>
        <Div>
            {props.charList.map((char, id)=> <CreateChar key={id} char={char}/>)}
        </Div>
    </>
  )
}

