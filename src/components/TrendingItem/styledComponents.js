import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`

export const TrendingThumbNail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 380px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const TrendingDetailsCont = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  @media screen and (min-width: 576px) {
    align-self: flex-start;
    padding: 0px;
    padding-left: 15px;
  }
`
export const TrendingProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingTextCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingTitle = styled.p`
  font-family: Roboto;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.color};
`

export const DetailsBottomCont = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TrendingChannelName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #94a3b8;
`
export const TrendingViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #94a3b8;
  @media screen and (min-width: 576px) {
    margin-top: 0px;
  }
`

export const TrendingDotd = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  color: #94a3b8;
`

export const TrendingDotv = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  color: #94a3b8;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
