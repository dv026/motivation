import { lazy, Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { clsx } from "clsx"

import { useTheme } from "./contexts/theme-context/theme-context"
import "./styles/index.scss"

const HomePage = lazy(() => import("../pages/home-page/ui/home-page"))
const LoginPage = lazy(() => import("../pages/login-page/ui/login-page"))
const SettingsPage = lazy(
  () => import("../pages/settings-page/ui/settings-page")
)

function App() {
  const { theme } = useTheme()
  return (
    <div className={clsx(["app", theme])}>
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
