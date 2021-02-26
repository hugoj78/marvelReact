import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Character = (props) => {

  const [dataApi, setDataApi] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fav, setFav] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [])

  const addFav = () => {

    var isFavoris = false;
    for(var i = 0; i < fav.length; i++) {
      if(fav[i].id === dataApi[0].id) {
        isFavoris = true
      }
    }
    
    if(!isFavoris) {
      setFav([...fav, dataApi[0]])
      localStorage.setItem('favorites', JSON.stringify([...fav, dataApi[0]]))
    }

  }

  const getCharacterById = useCallback(() => {
    axios({
      method: 'get',
      url: `http://gateway.marvel.com/v1/public/characters/${props.match.params.id}`,
      params: {
        'apikey': process.env.REACT_APP_MARVEL_PUBLIC_KEY,
        'ts': process.env.REACT_APP_MARVEL_TS,
        'hash': process.env.REACT_APP_MARVEL_HASH_KEY
      }
    }).then(res => {
      // console.log(res)
      setDataApi(res.data.data.results)
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
      setIsLoading(false)
    })
  }, [props.match.params.id])

  useEffect(() => {

    setTimeout(() => {
      getCharacterById()
    }, 1000)
    
  }, [getCharacterById])

  if(isLoading) {
    return(
        <LoadingContainer>
          <img src='../loader.gif' alt="loading..." />
        </LoadingContainer>
    )
  }

  return (
    <Container>
      {dataApi.map(data => (
          <DataContainer key={data.name}>
            <ImgContainer src={`${data.thumbnail.path}.${data.thumbnail.extension}`}  alt={data.name} />
            <ParagrapheContainer>{data.name}</ParagrapheContainer>
            <button onClick={addFav}>Add to fav bro</button>
          </DataContainer>
          
        ))}
    </Container>
  )
}

const Container = styled.div`
text-align: center
`

const DataContainer = styled.div``

const ImgContainer = styled.img`
  width: 150px;
`

const LoadingContainer = styled.div`
  text-align:center;
`


const ParagrapheContainer = styled.p``

export default Character;