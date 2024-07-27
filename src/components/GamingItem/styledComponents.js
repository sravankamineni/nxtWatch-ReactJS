import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 132px;
  margin-right: 15px;
  margin-bottom: 65px;
  @media screen and (min-width: 576px) {
    width: 240px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const GamingThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 300px;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const GamingViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #94a3b8;
`
