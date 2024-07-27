import styled from 'styled-components'

export const SavedAppCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const SavedCont = styled.div`
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
export const SavedHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const SavedIconCont = styled.div`
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
export const SavedText = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const SavedVideoList = styled.ul`
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

export const NoSavedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  margin-top: 60px;
`

export const NoSavedImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoSavedHead = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedDesc = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
