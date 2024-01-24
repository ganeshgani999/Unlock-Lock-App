import styled from 'styled-components'

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.div`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 27px;
  color: #ffffff;
  margin-bottom: 40px;
  
`
export const Image = styled.img`
  width: 96px;
  margin-bottom: 20px;
`
export const Button = styled.button`
  height: 35px;
  width: 90px;
  cursor: pointer;
  border: none;
  background-color: #06b6d4;
  border-radius: 10px;
  font-family: 'Roboto';
  color: #ffffff;
`