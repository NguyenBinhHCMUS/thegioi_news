import ReactDOM from 'react-dom/client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import App from './App'
import AppProvider from './AppProvider'

import './index.css'

class Application {
  constructor(private rootElement: HTMLElement) {}

  render() {
    const root = ReactDOM.createRoot(this.rootElement)

    root.render(
      <AppProvider>
        <App />
      </AppProvider>
    )
  }
}

export default Application
