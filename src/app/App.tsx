import { Navbar } from "@/widgets/navbar"
import { Sidebar } from "@/widgets/sidebar"
import { clsx } from "clsx"

import { AppRouter } from "./app-router/ui/app-router"
import { useTheme } from "./contexts/theme-context/theme-context"
import "./styles/index.scss"

function App() {
  const { theme } = useTheme()
  return (
    <div className={clsx(["app", theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
