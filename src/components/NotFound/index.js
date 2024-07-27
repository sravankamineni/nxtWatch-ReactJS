import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundCont,
  NotFoundView,
  NotFoundImg,
  NotFoundHead,
  NotFoundDesc,
  NotFoundAppCont,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFindImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundAppCont>
            <SideBar />
            <NotFoundCont bgColor={bgColor}>
              <NotFoundView>
                <NotFoundImg src={notFindImageUrl} alt="not found" />
                <NotFoundHead headingColor={headingColor}>
                  Page Not Found
                </NotFoundHead>
                <NotFoundDesc noteColor={noteColor}>
                  We are sorry, the page you requested could not be found.
                </NotFoundDesc>
              </NotFoundView>
            </NotFoundCont>
          </NotFoundAppCont>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
