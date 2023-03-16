import { useTheme } from "@/app/contexts/theme-context"
import { ETheme } from "@/app/contexts/theme-context/theme-context"
import classes from "./home.module.scss"

const HomePage = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className={classes.homePage} onClick={() => setTheme(ETheme.Dark)}>
      Home Page
    </div>
  )
}

export default HomePage
