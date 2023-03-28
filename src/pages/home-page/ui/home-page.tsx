import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

import classes from "./home.module.scss"
import { useModal } from "@/app/contexts/modal-context"

const HomePage = () => {
  const { t } = useTranslation()
  const { openModal } = useModal()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <div className={classes.homePage}>
      {t("home page")}
      <button onClick={openModal}>show modal</button>
    </div>
  )
}

export default HomePage
