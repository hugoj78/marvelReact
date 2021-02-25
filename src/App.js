import React from 'react'
import AppRoute from './config/routes'

import { ThemeProvider } from 'styled-components'
import { theme } from './config/theme'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <AppRoute />
      </ThemeProvider>
    </div>
  )
}

export default App
