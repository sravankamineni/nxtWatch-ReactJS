import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {BsBrightnessHigh} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderCont,
  OptionsCont,
  WebsiteLogo,
  ThemeBtn,
  Ham,
  ProfileImg,
  LogoutIcon,
  LogoutBtn,
  HeaderLink,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
  Closebttn,
  HamPopupCont,
  SidebarOptionCont,
  SidebarOptionsList,
  OptionName,
  NavLink,
} from './styledComponents'

import './index.css'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const sidebarBg = isDarkTheme ? '#212121' : '#ffffff'
      const optionColor = isDarkTheme ? '#f9f9f9' : '#212121'
      const activeTabBg = isDarkTheme ? '#383838' : '#d7dfe9'

      const onClickTabHome = () => {
        changeTab('Home')
      }
      const onClickTabTrending = () => {
        changeTab('Trending')
      }
      const onClickTabGaming = () => {
        changeTab('Gaming')
      }
      const onClickTabSaved = () => {
        changeTab('Saved')
      }

      const headerBg = isDarkTheme ? '#212121' : '#ffffff'
      const buttonColor = isDarkTheme ? '#ffffff' : '#3b82f6'
      const iconColor = isDarkTheme ? '#ffffff' : ''
      const modalBg = isDarkTheme ? '#212121' : '#cbd5e1'
      const modalColor = isDarkTheme ? '#ffffff' : '#181818'

      return (
        <HeaderCont bgColor={headerBg}>
          <HeaderLink to="/">
            <WebsiteLogo
              alt="website logo"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </HeaderLink>

          <OptionsCont>
            <ThemeBtn data-testid="theme" type="button" onClick={onClickTheme}>
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <FaMoon size="20" />
              )}
            </ThemeBtn>

            <Popup
              modal
              trigger={
                <Ham color={iconColor} type="button">
                  <GiHamburgerMenu size="20" />
                </Ham>
              }
              className="popup-content-ham"
            >
              {close => (
                <HamPopupCont bgColor={sidebarBg}>
                  <Closebttn
                    type="button"
                    data-testid="closeButton"
                    onClick={() => close()}
                  >
                    <IoMdClose size="30" color="#616e7c" />
                  </Closebttn>
                  <SidebarOptionsList>
                    <NavLink to="/">
                      <SidebarOptionCont
                        bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                        onClick={onClickTabHome}
                      >
                        <AiFillHome
                          size="20"
                          color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                        />
                        <OptionName
                          fontWeight={activeTab === 'Home' ? 'bold' : 'normal'}
                          color={optionColor}
                        >
                          Home
                        </OptionName>
                      </SidebarOptionCont>
                    </NavLink>

                    <NavLink to="/trending">
                      <SidebarOptionCont
                        bgColor={
                          activeTab === 'Trending' ? activeTabBg : 'none'
                        }
                        onClick={onClickTabTrending}
                      >
                        <HiFire
                          size="20"
                          color={
                            activeTab === 'Trending' ? '#ff0b37' : '#909090'
                          }
                        />
                        <OptionName
                          fontWeight={
                            activeTab === 'Trending' ? 'bold' : 'normal'
                          }
                          color={optionColor}
                        >
                          Trending
                        </OptionName>
                      </SidebarOptionCont>
                    </NavLink>

                    <NavLink to="/gaming">
                      <SidebarOptionCont
                        bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                        onClick={onClickTabGaming}
                      >
                        <SiYoutubegaming
                          size="20"
                          color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                        />
                        <OptionName
                          fontWeight={
                            activeTab === 'Gaming' ? 'bold' : 'normal'
                          }
                          color={optionColor}
                        >
                          Gaming
                        </OptionName>
                      </SidebarOptionCont>
                    </NavLink>

                    <NavLink to="/saved-videos">
                      <SidebarOptionCont
                        bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                        onClick={onClickTabSaved}
                      >
                        <CgPlayListAdd
                          size="20"
                          color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                        />
                        <OptionName
                          fontWeight={activeTab === 'Saved' ? 'bold' : 'normal'}
                          color={optionColor}
                        >
                          Saved videos
                        </OptionName>
                      </SidebarOptionCont>
                    </NavLink>
                  </SidebarOptionsList>
                </HamPopupCont>
              )}
            </Popup>

            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutBtn color={buttonColor} type="button">
                  Logout
                </LogoutBtn>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer bgColor={modalBg}>
                  <ModalDesc color={modalColor}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutIcon type="button" color={iconColor}>
                  <FiLogOut size="20" />
                </LogoutIcon>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer bgColor={modalBg}>
                  <ModalDesc color={modalColor}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </OptionsCont>
        </HeaderCont>
        
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
