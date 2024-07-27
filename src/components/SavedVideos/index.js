import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import TrendingItem from '../TrendingItem'

import {
  SavedCont,
  SavedIconCont,
  SavedHeader,
  SavedVideoList,
  SavedText,
  SavedAppCont,
  NoSavedView,
  NoSavedImg,
  NoSavedHead,
  NoSavedDesc,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const trendHeaderBg = isDarkTheme ? '#181818' : '#f1f1f1'
      const iconBg = isDarkTheme ? '#000000' : '#cbd5e1'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <SavedAppCont>
            <SideBar />
            <SavedCont data-testid="savedVideos" bgColor={bgColor}>
              <SavedHeader bgColor={trendHeaderBg}>
                <SavedIconCont bgColor={iconBg}>
                  <CgPlayListAdd size={20} color="#ff0000" />
                </SavedIconCont>
                <SavedText color={textColor}>Saved Videos</SavedText>
              </SavedHeader>

              {savedVideos.length > 0 ? (
                <SavedVideoList>
                  {savedVideos.map(eachVideo => (
                    <TrendingItem key={eachVideo.id} videoDetails={eachVideo} />
                  ))}
                </SavedVideoList>
              ) : (
                <NoSavedView>
                  <NoSavedImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedHead headingColor={headingColor}>
                    No saved videos found
                  </NoSavedHead>
                  <NoSavedDesc noteColor={noteColor}>
                    You can save your videos while watching them
                  </NoSavedDesc>
                </NoSavedView>
              )}
            </SavedCont>
          </SavedAppCont>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
