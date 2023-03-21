import { useTranslation } from "react-i18next"

import { Button } from "@/shared/ui/button/button"

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  return (
    <Button
      onClick={() => i18n.changeLanguage(currentLang === "ru" ? "en" : "ru")}
    >
      {t("change language")}
    </Button>
  )
}
