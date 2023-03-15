import { lazy } from "react"
import { Routes, Route, Link } from "react-router-dom"

const HomePage = lazy(() => import("./pages/home"))
const LoginPage = lazy(() => import("./pages/login"))

function App() {
  return (
    <div className="App">
      <Link to="/">Home page</Link>
      <Link to="/login">Login page</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
