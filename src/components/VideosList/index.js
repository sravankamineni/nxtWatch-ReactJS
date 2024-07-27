import {
  NoVideosCont,
  NoVideosImg,
  NoVideosHead,
  NoVideosDesc,
  VideoList,
  RetryBtn,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'
import VideoItem from '../VideoItem'

const VideosList = props => {
  const {videoList, onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videoList.length > 0 ? (
          <VideoList>
            {videoList.map(eachVideo => (
              <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideoList>
        ) : (
          <NoVideosCont>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHead headColor={headColor}>
              No Search results found
            </NoVideosHead>
            <NoVideosDesc descColor={descColor}>
              Try different key words or remove search filter
            </NoVideosDesc>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </NoVideosCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideosList
