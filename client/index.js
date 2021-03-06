import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import './i18n'

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
      <App />,
    document.getElementById('app')
  )
})