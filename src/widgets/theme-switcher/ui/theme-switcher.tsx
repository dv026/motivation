import { useTheme } from "@/app/contexts/theme-context"
import { ETheme } from "@/app/contexts/theme-context/theme-context"
import clsx from "clsx"

import { ReactComponent as ToggleOn } from "@/shared/assets/icons/toggle-on.svg"
import { ReactComponent as ToggleOff } from "@/shared/assets/icons/toggle-off.svg"
import { Button } from "@/shared/ui/button/button"

import cls from "./theme-swithcer.module.scss"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    if (theme === ETheme.Light) {
      setTheme(ETheme.Dark)
    } else {
      setTheme(ETheme.Light)
    }
  }

  return (
    <Button className={clsx(cls.themeSwitcher)} onClick={changeTheme}>
      {theme === ETheme.Light ? <ToggleOn /> : <ToggleOff />}
    </Button>
  )
}
