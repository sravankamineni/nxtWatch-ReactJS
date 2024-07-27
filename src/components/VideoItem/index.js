import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItems,
  Thumbnail,
  VideoDetails,
  ChannelLogo,
  VideoTextCont,
  VideoTitle,
  ChannelName,
  ViewsAndDateCont,
  ChannelViews,
  UploadTime,
  HomeLink,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    name,
    id,
    publishedAt,
    thumbnailUrl,
    profileImageUrl,
    title,
    viewCount,
  } = videoDetails

  const distance = formatDistanceToNow(new Date(publishedAt))

  const uploadedSince = distance.substring(
    distance.indexOf(distance.match(/\d+/g)),
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <HomeLink to={`/videos/${id}`}>
            <VideoItems>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <VideoTextCont>
                  <VideoTitle color={textColor}>{title}</VideoTitle>
                  <ChannelName>{name}</ChannelName>
                  <ViewsAndDateCont>
                    <ChannelViews>{viewCount} views</ChannelViews>
                    <UploadTime>{uploadedSince} ago</UploadTime>
                  </ViewsAndDateCont>
                </VideoTextCont>
              </VideoDetails>
            </VideoItems>
          </HomeLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
