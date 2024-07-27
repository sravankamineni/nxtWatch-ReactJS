import styled from 'styled-components'

export const VideoItemDetailsAppCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const VideoDetailViewCont = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  width: 100%;
`
export const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`
