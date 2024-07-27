import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedVideos: [],
  saveVideo: () => {},
})

export default NxtWatchContext
