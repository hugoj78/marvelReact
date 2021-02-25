import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import ShowAllCharacters from './showAllCharacters'

const Characters = () => {

  const [dataApi, setDataApi] = useState([])
  const [offSet, setOffSet] = useState({number: 0, numPage: 1})

  const decrease = () => {
    if (offSet.numPage > 1) {
      setOffSet({...offSet, number: offSet.number - 16, numPage: offSet.numPage - 1})
    }
  }

  const increase = () => {
    if (offSet.numPage < 100) {
      setOffSet({...offSet, number: offSet.number + 16, numPage: offSet.numPage + 1})
    }
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://gateway.marvel.com/v1/public/characters`,
      params: {
        'apikey': process.env.REACT_APP_MARVEL_PUBLIC_KEY,
        'ts': process.env.REACT_APP_MARVEL_TS,
        'hash': process.env.REACT_APP_MARVEL_HASH_KEY,
        'limit': 16,
        'offset': offSet.number
      }
    }).then(res => {
      setDataApi(res.data.data.results)
    }).catch(err => {
      console.log(err)
    })
  }, [offSet])

  return (
    <Container>
      <ShowAllCharacters dataApi={dataApi} offSet={offSet} increase={increase} decrease={decrease} ></ShowAllCharacters>
    </Container>
  )
}

const Container = styled.div``

export default Characters
