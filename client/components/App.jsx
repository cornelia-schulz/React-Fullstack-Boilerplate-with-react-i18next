import React from 'react'
import { I18n } from 'react-i18next';
import { getAllCats } from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    getAllCats()
      .then(cats => {
        this.setState({ cats })
      })
  }

  render() {
    return (
      <I18n ns="strings">
        {
          (t, { i18n }) => (
            <div className="App">
              <h1>{t('appName')}</h1>
                <button onClick={() => i18n.changeLanguage('de')}>{t('languages.de')}</button>
                <button onClick={() => i18n.changeLanguage('en')}>{t('languages.en')}</button>
                <h2>{t('cats')}</h2>
              {this.state.cats && <ul>
                {this.state.cats.map(cat => {
                  return <li key={cat.id}>{cat.name}</li>
                })}
              </ul>}
            </div>
          )
        }
      </I18n>
    )
  }
}
export default App