import styled from 'styled-components'

export const PlayVideoCont = styled.div`
  padding: 20px;
`

export const PlayVideoTitle = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
`
export const PlayVideoDetailsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const PlayVideoDetails = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #94a3b8;
`
export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const PlayBtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SocialBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.color};
`
export const BtnTxt = styled.span`
  margin-left: 5px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const Line = styled.hr`
  border: 1px solid #909090;
`
export const ChannelCont = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin: 0px;
`
export const ChannelSubscribers = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #94a3b8;
`
export const ChannelDesc = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
`
export const BtnCont = styled.div`
  display: flex;
  background: none;
  color: ${props => props.color};
`
