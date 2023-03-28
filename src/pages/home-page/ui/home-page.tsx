import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { registration } from "ts-authenticator-client"

import classes from "./home.module.scss"
import { Loader } from "@/shared/ui/loader/loader"

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
      <Loader />
      <button
        onClick={() => {
          const arr: any = [1, 2, 3]
          registration({ login: "dimavas026@ya123.ru", password: "1234" })
        }}
      >
        click to error
      </button>
    </div>
  )
}

export default HomePage
