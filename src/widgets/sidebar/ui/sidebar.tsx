import { Button } from "@/shared/ui/button/button"
import { LangSwitcher } from "@/widgets/lang-switcher"
import { ThemeSwitcher } from "@/widgets/theme-switcher"
import clsx from "clsx"
import { useState } from "react"
import cls from "./sidebar.module.scss"

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className={clsx(cls.sidebar, { [cls.collapsed]: collapsed })}>
      <Button onClick={() => setCollapsed((p) => !p)}>toggle collapse</Button>
      <div>sidebar</div>
      <ThemeSwitcher className={cls.themeSwitcher} />
      <LangSwitcher />
    </div>
  )
}
