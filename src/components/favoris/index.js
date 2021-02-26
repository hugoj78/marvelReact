import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Favoris = () => {

  const [dataFav, setDataFav] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fav = JSON.parse(localStorage.getItem('favorites'))

    setTimeout(() => {
      setDataFav(fav)
      setIsLoading(false)
    }, 1000)

    
    
  }, [dataFav])


  if(isLoading) {
    return(
        <LoadingContainer>
          <img src='../loader.gif' alt="loading..." />
        </LoadingContainer>
    )
  }

  return (
    <Container>
      <h1>Liste de mes Hero Favoris</h1>
      {dataFav[0] ? (
        <div>
          {dataFav.map(data => (
            <div key={data.id}>
              <p>{data.name}</p>
            </div>
          ))}
         </div>
      ) : (<p>Pas de fav</p>)
      }
    </Container>
  );
};

const Container = styled.div`text-align: center;`

const LoadingContainer = styled.div`
  text-align:center;
`

export default Favoris;