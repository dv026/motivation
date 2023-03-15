import { lazy, Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"

import { useTheme } from "./contexts/theme-context"
import "./styles/index.scss"

const HomePage = lazy(() => import("./pages/home/home"))
const LoginPage = lazy(() => import("./pages/login/login"))
const SettingsPage = lazy(() => import("./pages/settings/settings"))

function App() {
  const { theme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      hello
      <Link to="/">Home page</Link>
      <Link to="/login">Login page</Link>
      <Link to="/settings">Settings page</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
