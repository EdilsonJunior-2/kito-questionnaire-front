import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QuestionnaireProvider } from './contexts/questionnaire'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuestionnaireProvider>
      <App />
    </QuestionnaireProvider>
  </StrictMode>,
)
