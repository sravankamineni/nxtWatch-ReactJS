import styled from 'styled-components'

export const HomeAppCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const HomeCont = styled.div`
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

export const BannerCont = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  margin-right: 0px;
  margin-left: 0px;
`

export const BannerTextCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
}
`

export const NxtWatchLogo = styled.img`
  width: 120px;
  height: 30px;
`

export const CloseIcon = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin-bottom: 0px;
  align-self: flex-end;
  cursor: pointer;
`

export const BannerText = styled.p`
  color: #1e293b;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 25px;
`

export const GetBtn = styled.button`
  border: 1px solid #1e293b;
  color: #1e293b;
  background: none;
  font-weight: 600;
  font-size: 14px;
  width: 102px;
  height: 38px;
  font-family: 'Roboto';
`

export const HomeBottomCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 0px;
  width: 100%;
`

export const SearchInputCont = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  padding-left: 16px;
  width: 65%;
  padding: 8px;
  height: 30px;
  border: 1px solid #7e858e;
  margin: 0px;
  outline: none;
  border-right: 0px;
  background-color: transparent;
  color: ${props => props.color};
`

export const SearchBtn = styled.button`
  height: 30px;
  border: 1px solid #7e858e;
  margin: 0px;
  color: #7e858e;
  width: 60px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
