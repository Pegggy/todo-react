import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import App from './app'
import store from './redux/store'



renderWithHotReload()
if (module.hot) {
  module.hot.accept('./app', () => { renderWithHotReload() })
}
function renderWithHotReload() {
  render(
      <AppContainer>
        <Provider store={store}> 
          <App />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
  )
}