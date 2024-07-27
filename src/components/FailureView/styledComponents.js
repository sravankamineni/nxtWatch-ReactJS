import styled from 'styled-components'

export const FailCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  margin-top: 60px;
`

export const FailImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailHead = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headColor};
  text-align: center;
`

export const FailDesc = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.descColor};
  text-align: center;
`

export const RetryBtn = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: Roboto;
  font-size: 15px;
  cursor: pointer;
`
