import React, { useState, useEffect, useCallback } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Search = () => {

  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const search = (e) => {
  e.preventDefault()
  if(searchText) {
    getResultsSearch()
  }
  setSearchText('')
  }

  const getResultsSearch = useCallback(() => {
    axios({
      method: 'get',
      url: `http://gateway.marvel.com/v1/public/characters`,
      params: {
        'apikey': process.env.REACT_APP_MARVEL_PUBLIC_KEY,
        'ts': process.env.REACT_APP_MARVEL_TS,
        'hash': process.env.REACT_APP_MARVEL_HASH_KEY,
        'nameStartsWith': searchText,
        'limit': 100
      }
    }).then(res => {
      setData(res.data.data.results)
    }).catch(err => {
      console.log(err)
    })
  }, [searchText])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  })

  if(isLoading) {
    return(
        <LoadingContainer><img src='loader.gif' alt="loading..." /></LoadingContainer>
    )
  }

  return (
    <Container>
      <h1>Search Page</h1>
      <form onClick={search}>
        <input 
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>

      {data[0] ? (
        <div>
          <DataContainer>
            {data.map(dataCharac => (
              <ItemContainer key={dataCharac.name}>
                <ImgContainer src={`${dataCharac.thumbnail.path}.${dataCharac.thumbnail.extension}`}  alt={dataCharac.name} />
                <ParagrapheContainer>{dataCharac.name}</ParagrapheContainer>
                <Link to={`/characters/${dataCharac.id}`}>
                  <ButtonContainer onClick={() => {}}>Show</ButtonContainer>
                </Link>
              </ItemContainer>
            ))}
          </DataContainer>
      </div>
      ) : (
        <RetryContainer>
          <ParagrapheContainer>No results</ParagrapheContainer>
        </RetryContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`

const LoadingContainer = styled.div`
  text-align:center;
`

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

const ButtonContainer = styled.button`
  margin: 10px;
`

const ParagrapheContainer = styled.p``

const RetryContainer = styled.div`
  text-align: center;
`

export default Search;