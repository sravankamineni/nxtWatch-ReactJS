import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import FailureView from '../FailureView'
import VideosList from '../VideosList'
import SideBar from '../SideBar'

import {
  HomeAppCont,
  HomeCont,
  BannerCont,
  BannerTextCont,
  NxtWatchLogo,
  CloseIcon,
  BannerText,
  GetBtn,
  HomeBottomCont,
  SearchInputCont,
  SearchInput,
  SearchBtn,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    seacrhInput: '',
    bannerDisplay: 'flex',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoList()
  }

  onGetSearchInput = event => {
    this.setState({seacrhInput: event.target.value})
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  getVideoList = async () => {
    const {seacrhInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${seacrhInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      // console.log(fetchedData)
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getSearchResults = () => {
    this.getVideoList()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideoList)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideosListView = () => {
    const {videoList} = this.state
    return <VideosList videoList={videoList} onRetry={this.onRetry} />
  }

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {seacrhInput, bannerDisplay} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const sidebarBg = isDarkTheme ? '#212121' : '#f1f5f9'
          const bgColor = isDarkTheme ? '#181818' : ' #f9f9f9'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'
          const searchColor = isDarkTheme ? '#ffffff' : '#181818'

          return (
            <>
              <Header />
              <HomeAppCont>
                <SideBar />
                <HomeCont bgColor={bgColor} data-testid="home">
                  <BannerCont data-testid="banner" display={display}>
                    <CloseIcon
                      onClick={this.onCloseBanner}
                      type="button"
                      data-testid="close"
                    >
                      <AiOutlineClose size="20" />
                    </CloseIcon>
                    <BannerTextCont>
                      <NxtWatchLogo
                        alt="nxt watch logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <GetBtn type="button">GET IT NOW</GetBtn>
                    </BannerTextCont>
                  </BannerCont>

                  <HomeBottomCont>
                    <SearchInputCont>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onGetSearchInput}
                        value={seacrhInput}
                        color={searchColor}
                      />
                      <SearchBtn
                        bgColor={sidebarBg}
                        type="button"
                        onClick={this.getSearchResults}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch size="20" />
                      </SearchBtn>
                    </SearchInputCont>
                    {this.renderHomeVideos()}
                  </HomeBottomCont>
                </HomeCont>
              </HomeAppCont>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
