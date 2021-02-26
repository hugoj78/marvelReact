import React from 'react';
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';


const HeaderLogOut = ({isToken, setIsToken}) => {
  const history = useHistory()

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setIsToken('')
    history.push('/')
  }

  const handleLogIn = () => {
    history.push('/')
  }

  return (
    <Container>
      <LeftContainer>
        <TitleContainer>Marvel</TitleContainer>
        
          {isToken ? (
            <HeaderContainer>
              <LinkContainer>
                <Link to='/characters'>
                  <HeaderTitleContainer>Characters</HeaderTitleContainer>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link to='/favorites'>
                <HeaderTitleContainer>Favoris</HeaderTitleContainer>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link to='/search'>
                <HeaderTitleContainer>Recherche</HeaderTitleContainer>
                </Link>
              </LinkContainer>
            </HeaderContainer>
          ) : (
            null
            )}
      </LeftContainer>
      <RightContainer>
        {isToken ? (
        <ButtonLogContainer onClick={handleLogOut}>LogOut</ButtonLogContainer>
        ) : (
          <ButtonLogContainer onClick={handleLogIn}>LogIn</ButtonLogContainer>
        )}
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const LinkContainer = styled.div`
  margin-left: 100px;
  font-style: italic;
  
  a {
    text-decoration: none;
    color: grey;
  }

  &:hover {
    background-color: #ddd;
    border-radius: 12px;
    color: black;
  }
`

const RightContainer = styled.div`
  text-align: right;
  margin: 10px;
`

const LeftContainer = styled.div`
  text-align: left;
  margin-left: 10px;
  display: flex;
`

const TitleContainer = styled.p``

const HeaderTitleContainer = styled.p`
text-align:center`
const ButtonLogContainer = styled.button``

export default HeaderLogOut;