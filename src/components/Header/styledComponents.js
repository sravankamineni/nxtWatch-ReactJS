import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HeaderCont = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 0px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 32px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const WebsiteLogo = styled.img`
  height: 25px;
  width: 100px;
`

export const OptionsCont = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0px;
  margin-right: 8px;
  cursor: pointer;
`

export const Ham = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.color};
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  margin-bottom: 7px;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutIcon = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  border: none;
  margin-right: 8px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  background-color: transparent;
  margin-bottom: 7px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: ${props => props.color};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  outline: none;
`

export const Closebttn = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  outline: none;
  cursor: pointer;
`

export const HamPopupCont = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: ${props => props.bgColor};
  border: 10px solid #ffffff;
  height: 100vh;
`

export const SidebarOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  padding-top: 45px;
  width: 100%;
`

export const SidebarOptionCont = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 40%;
  background-color: ${props => props.bgColor};
  height: 40px;
  cursor: pointer;
  text-align: center;
`

export const OptionName = styled.p`
  margin-left: 16px;
  font-size: 16px;
  font-family: 'Roboto';
  align-self: center;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`
