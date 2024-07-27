import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HomeLink = styled(Link)`
  text-decoration: none;
`

export const VideoItems = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 15px;
  margin-bottom: 65px;
  @media screen and (min-width: 576px) {
    width: 240px;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  align-self: flex-start;
  margin-top: 10px;
  margin-right: 15px;
`

export const VideoTextCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 12px;
  color: ${props => props.color};
  line-height: 1.5;
`

export const ChannelName = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  margin-top: 0px;
`

export const ViewsAndDateCont = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
  padding-right: 10px;
`

export const ChannelViews = styled.p`
  list-style-type: none;
  color: #94a3b8;
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-right: 20px;
`

export const UploadTime = styled.p`
  color: #94a3b8;
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: 400;
  list-style-type: disc;
`
