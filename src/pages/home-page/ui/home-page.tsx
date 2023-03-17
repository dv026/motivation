import { useTheme } from "@/app/contexts/theme-context"
import { ETheme } from "@/app/contexts/theme-context/theme-context"
import { Navbar } from "@/widgets/navbar"
import { ThemeSwitcher } from "@/widgets/theme-switcher"
import classes from "./home.module.scss"

const HomePage = () => {
  const { setTheme } = useTheme()
  return (
    <div className={classes.homePage}>
      <Navbar />
      <ThemeSwitcher />
      Home Page
    </div>
  )
}

export default HomePage
