import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { SettingsProvider } from './contexts/SettingsContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import RootsPage from './pages/RootsPage'
import VocabularyPage from './pages/VocabularyPage'
import SettingsPage from './pages/SettingsPage'
import RootDetailPage from './pages/RootDetailPage'
import VocabularyDetailPage from './pages/VocabularyDetailPage'

function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <LanguageProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/roots" element={<RootsPage />} />
              <Route path="/roots/:id" element={<RootDetailPage />} />
              <Route path="/vocabulary" element={<VocabularyPage />} />
              <Route path="/vocabulary/:id" element={<VocabularyDetailPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Layout>
        </LanguageProvider>
      </SettingsProvider>
    </ThemeProvider>
  )
}

export default App
