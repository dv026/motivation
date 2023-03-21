import { Navbar } from "@/widgets/navbar"
import { ThemeSwitcher } from "@/widgets/theme-switcher"
import classes from "./home.module.scss"
import { useTranslation } from "react-i18next"

const HomePage = () => {
  const { t } = useTranslation()
  return <div className={classes.homePage}>{t("home page")}</div>
}

export default HomePage
