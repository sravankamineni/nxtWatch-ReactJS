import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  PlayVideoCont,
  PlayVideoTitle,
  PlayVideoDetails,
  PlayVideoDetailsCont,
  PlayVideoDot,
  PlayBtnCont,
  SocialBtn,
  BtnTxt,
  Line,
  ChannelImg,
  ChannelCont,
  ChannelDetails,
  ChannelName,
  ChannelSubscribers,
  ChannelDesc,
} from './styledComponents'

const PlayVideo = props => {
  const {
    videoDetailsList,
    isLiked,
    isDisLiked,
    clickLiked,
    clickDisLiked,
  } = props
  // console.log(videoDetailsList)

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }

  const distance = formatDistanceToNow(new Date(videoDetailsList.publishedAt))

  const uploadedSince = distance.substring(
    distance.indexOf(distance.match(/\d+/g)),
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, saveVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        const likeIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

        let isSaved
        const index = savedVideos.findIndex(
          each => each.id === videoDetailsList.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveBtnColor = isSaved ? '#2563eb' : '#64748b'

        const onClickSave = () => {
          saveVideo(videoDetailsList)
        }

        return (
          <PlayVideoCont>
            <ReactPlayer
              url={videoDetailsList.videoUrl}
              controls
              width="100%"
              height="70vh"
            />
            <PlayVideoTitle color={textColor}>
              {videoDetailsList.title}
            </PlayVideoTitle>
            <PlayVideoDetailsCont>
              <PlayVideoDetails>
                {videoDetailsList.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {uploadedSince} ago
              </PlayVideoDetails>
              <PlayBtnCont>
                <SocialBtn
                  type="button"
                  color={likeIconColor}
                  onClick={onClickLike}
                >
                  <AiOutlineLike size="20" />
                  <BtnTxt>Like</BtnTxt>
                </SocialBtn>

                <SocialBtn
                  type="button"
                  color={dislikeIconColor}
                  onClick={onClickDislike}
                >
                  <AiOutlineDislike size="20" />
                  <BtnTxt>Dislike</BtnTxt>
                </SocialBtn>

                <SocialBtn
                  type="button"
                  color={saveBtnColor}
                  onClick={onClickSave}
                >
                  <BiListPlus size="20" />
                  <BtnTxt>{isSaved ? 'Saved' : 'Save'}</BtnTxt>
                </SocialBtn>
              </PlayBtnCont>
            </PlayVideoDetailsCont>
            <Line />
            <ChannelCont>
              <ChannelImg
                src={videoDetailsList.profileImageUrl}
                alt="channel logo"
              />
              <ChannelDetails>
                <ChannelName color={textColor}>
                  {videoDetailsList.name}
                </ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetailsList.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDesc color={textColor}>
                  {videoDetailsList.description}
                </ChannelDesc>
              </ChannelDetails>
            </ChannelCont>
          </PlayVideoCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default PlayVideo
