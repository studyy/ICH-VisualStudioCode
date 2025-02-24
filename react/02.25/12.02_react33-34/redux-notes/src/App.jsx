import { Provider } from 'react-redux'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import NoteList from './components/NoteList'
import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main>
        <NoteList />
      </Main>
      <Footer />
    </Provider>
  )
}
