import React from 'react';
import styled from 'styled-components'

const ShowAllCharacters = ({dataApi, offSet, increase, decrease}) => {
  return (
    <Container>
      <TitleContainer>Characters Page</TitleContainer>
      <DataContainer>
        {dataApi.map(data => (
          <ItemContainer key={data.name}>
            <ImgContainer src={`${data.thumbnail.path}.${data.thumbnail.extension}`}  alt={data.name} />
            <ParagrapheContainer>{data.name}</ParagrapheContainer>
            <ButtonContainer onClick=''>Show</ButtonContainer>
          </ItemContainer>
          
        ))}
      </DataContainer>
      <PaginationContainer>
        <ButtonContainer onClick={decrease}> - </ButtonContainer>
        <ParagrapheContainer>{offSet.numPage}</ParagrapheContainer>
        <ButtonContainer onClick={increase}> + </ButtonContainer>
      </PaginationContainer>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const TitleContainer = styled.h1``

const ImgContainer = styled.img`
  width: 150px;
`
const DataContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: space-between;
`
  
const ItemContainer = styled.div`
  width: 300px;
  height: 300px;
  font-size: 20px;
  text-align: center;
  margin: 10px
  `

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonContainer = styled.button`
  margin: 10px;
`

const ParagrapheContainer = styled.p``

export default ShowAllCharacters;