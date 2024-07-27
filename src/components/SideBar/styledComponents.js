import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SideBarCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  flex-grow: 0;
  padding: 0px;
  height: 100vh;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SidebarOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  padding-top: 45px;
`

export const SidebarOptionCont = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
  background-color: ${props => props.bgColor};
  height: 40px;
  cursor: pointer;
`

export const OptionName = styled.p`
  margin-left: 16px;
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`

export const SidebarBottomCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 25px;
  padding-left: 25px;
  width: 90%;
`

export const ContactUsHead = styled.p`
  color: #231f20;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 0px;
  color: ${props => props.color};
`

export const ContactsList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
  margin-bottom: 0px;
`

export const ContactItem = styled.li`
  margin-right: 8px;
`

export const ContactLogo = styled.img`
  width: 25px;
  height: 25px;
`
export const ContactDesc = styled.p`
  color: #231f20;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
