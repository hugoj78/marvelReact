import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';


const HeaderLogOut = ({isToken, setIsToken}) => {
  const history = useHistory()

  // useEffect(() => {
  //   setIsToken(localStorage.getItem('token'))
  // }, [isToken])

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
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

const RightContainer = styled.div`
  text-align: right;
  margin: 10px;
`

const LeftContainer = styled.div`
  text-align: left;
  margin-left: 10px;
`

const TitleContainer = styled.p``
const ButtonLogContainer = styled.button``

export default HeaderLogOut;