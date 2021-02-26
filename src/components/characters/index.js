import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import ShowAllCharacters from './showAllCharacters'

const Characters = () => {

  const [dataApi, setDataApi] = useState([])
  const [offSet, setOffSet] = useState({number: 0, numPage: 1})
  const [isLoading, setIsLoading] = useState(true)

  const decrease = () => {
    if (offSet.numPage > 1) {
      setOffSet({...offSet, number: offSet.number - 15, numPage: offSet.numPage - 1})
    }
  }

  const increase = () => {
    if (offSet.numPage < 100) {
      setOffSet({...offSet, number: offSet.number + 15, numPage: offSet.numPage + 1})
    }
  }

  const getCharacters = useCallback(() => {
    axios({
      method: 'get',
      url: `http://gateway.marvel.com/v1/public/characters`,
      params: {
        'apikey': process.env.REACT_APP_MARVEL_PUBLIC_KEY,
        'ts': process.env.REACT_APP_MARVEL_TS,
        'hash': process.env.REACT_APP_MARVEL_HASH_KEY,
        'limit': 15,
        'offset': offSet.number
      }
    }).then(res => {
      // console.log(res)
      setDataApi(res.data.data.results)
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
      setIsLoading(false)
    })
  }, [offSet])

  useEffect(() => {

    setTimeout(() => {
      getCharacters()
    }, 1000)

  }, [getCharacters])

  if(isLoading) {
    return(
        <LoadingContainer><img src='loader.gif' alt="loading..." /></LoadingContainer>
    )
  }

  return (
    <Container>
      <ShowAllCharacters dataApi={dataApi} offSet={offSet} increase={increase} decrease={decrease} getCharacters={getCharacters}></ShowAllCharacters>
    </Container>
  )
}

const Container = styled.div``
const LoadingContainer = styled.div`
  text-align:center;
`

export default Characters
