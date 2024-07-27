import styled from 'styled-components'

export const TrendingAppCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const TrendingCont = styled.div`
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
export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const IconCont = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const TrendingText = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
