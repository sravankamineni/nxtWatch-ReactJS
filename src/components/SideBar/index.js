import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SideBarCont,
  SidebarOptionsList,
  SidebarOptionCont,
  OptionName,
  SidebarBottomCont,
  ContactUsHead,
  ContactsList,
  ContactItem,
  ContactLogo,
  ContactDesc,
  NavLink,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeTab} = value
          // console.log(activeTab)

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

          return (
            <SideBarCont bgColor={sidebarBg}>
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
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size="20"
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <OptionName
                      fontWeight={activeTab === 'Trending' ? 'bold' : 'normal'}
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
                      fontWeight={activeTab === 'Gaming' ? 'bold' : 'normal'}
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

              <SidebarBottomCont>
                <ContactUsHead color={optionColor}>CONTACT US</ContactUsHead>
                <ContactsList>
                  <ContactItem>
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                  </ContactItem>

                  <ContactItem className="contact-item">
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                      alt="twitter logo"
                    />
                  </ContactItem>

                  <ContactItem className="contact-item">
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                      alt="linked in logo"
                    />
                  </ContactItem>
                </ContactsList>
                <ContactDesc color={optionColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDesc>
              </SidebarBottomCont>
            </SideBarCont>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default SideBar
