import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeebackForm from './components/FeebackForm'

import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

import { FeedbackProvider } from './context/FeedbackContext'

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeebackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}
