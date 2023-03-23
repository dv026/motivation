import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

import classes from "./home.module.scss"

const HomePage = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <div className={classes.homePage}>
      {t("home page")}
      <button
        onClick={() => {
          const arr: any = [1, 2, 3]

          console.log(arr.name.name)
        }}
      >
        click to error
      </button>
    </div>
  )
}

export default HomePage
