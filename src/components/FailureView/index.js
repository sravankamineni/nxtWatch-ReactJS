import {
  FailCont,
  FailImg,
  FailHead,
  FailDesc,
  RetryBtn,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return (
          <FailCont>
            <FailImg
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailHead headColor={headColor}>
              Oops! Something Went Wrong
            </FailHead>
            <FailDesc descColor={descColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailDesc>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </FailCont>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
