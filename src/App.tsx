import React, { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { SettingsProvider } from './contexts/SettingsContext'
import Layout from './components/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const RootsPage = lazy(() => import('./pages/RootsPage'))
const VocabularyPage = lazy(() => import('./pages/VocabularyPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const RootDetailPage = lazy(() => import('./pages/RootDetailPage'))
const VocabularyDetailPage = lazy(() => import('./pages/VocabularyDetailPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <LanguageProvider>
          <Layout>
            <ScrollToTop />
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/roots" element={<RootsPage />} />
                <Route path="/roots/:id" element={<RootDetailPage />} />
                <Route path="/vocabulary" element={<VocabularyPage />} />
                <Route path="/vocabulary/:id" element={<VocabularyDetailPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </Suspense>
          </Layout>
        </LanguageProvider>
      </SettingsProvider>
    </ThemeProvider>
  )
}

export default App
