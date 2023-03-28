import { useTheme } from "@/app/contexts/theme-context"
import { ETheme } from "@/app/contexts/theme-context"
import clsx from "clsx"

import { ReactComponent as ToggleOn } from "@/shared/assets/icons/toggle-on.svg"
import { ReactComponent as ToggleOff } from "@/shared/assets/icons/toggle-off.svg"
import { Button } from "@/shared/ui/button/button"

import cls from "./theme-switcher.module.scss"
import { FC } from "react"

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    if (theme === ETheme.Light) {
      setTheme(ETheme.Dark)
    } else {
      setTheme(ETheme.Light)
    }
  }

  return (
    <Button
      className={clsx(cls.themeSwitcher, className)}
      onClick={changeTheme}
    >
      {theme === ETheme.Light ? <ToggleOn /> : <ToggleOff />}
    </Button>
  )
}
