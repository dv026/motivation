import { Link } from "@/shared/ui"
import clsx from "clsx"
import { FC } from "react"

import cls from "./navbar.module.scss"

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={clsx(className, cls.navbar)}>
      <Link to="/">Home</Link>
      <Link className={cls.login} to="/login">
        Login
      </Link>
      <Link to="/settings">Settings</Link>
    </div>
  )
}
