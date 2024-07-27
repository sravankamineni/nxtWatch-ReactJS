import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNail,
  TrendingDetailsCont,
  TrendingProfileImg,
  TrendingTextCont,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDotv,
  TrendingDotd,
  DetailsBottomCont,
} from './styledComponents'

const TrendingItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
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
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <TrendingDetailsCont>
                <TrendingProfileImg src={profileImageUrl} alt="channel logo" />

                <TrendingTextCont>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>

                  <DetailsBottomCont>
                    <TrendingChannelName>{name}</TrendingChannelName>

                    <TrendingViewsAndDate>
                      <TrendingDotv> &#8226; </TrendingDotv>
                      {viewCount} views<TrendingDotd> &#8226; </TrendingDotd>
                      {uploadedSince} ago
                    </TrendingViewsAndDate>
                  </DetailsBottomCont>
                </TrendingTextCont>
              </TrendingDetailsCont>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingItem
