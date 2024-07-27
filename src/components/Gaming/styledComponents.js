import styled from 'styled-components'

export const GamingAppCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const GamingCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-top: 0px;
  margin-top: 0px;
  overflow-y: auto;
  padding-right: 0px;
  background-color: ${props => props.bgColor};
`
export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const IconCont = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const GamingText = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 45px;
    padding-left: 65px;
  }
`
export const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
