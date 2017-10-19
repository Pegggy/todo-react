import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './app'


renderWithHotReload()
if (module.hot) {
  module.hot.accept('./app', () => { renderWithHotReload() })
}
function renderWithHotReload() {
  render(
      <AppContainer>
          <App />
      </AppContainer>,
      document.getElementById('app')
  )
}