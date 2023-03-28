import clsx from "clsx"
import { FC } from "react"
import {
  LinkProps as RouterLinkProps,
  Link as RouterLink,
} from "react-router-dom"

import cls from "./link.module.scss"

export enum ELinkVariant {
  Basic = "basic",
  Special = "special",
}

interface LinkProps extends RouterLinkProps {
  className?: string
  variant?: ELinkVariant
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  variant = ELinkVariant.Basic,
  to,
  ...other
}) => {
  return (
    <RouterLink
      className={clsx(className, cls.link, variant)}
      to={to}
      {...other}
    >
      {children}
    </RouterLink>
  )
}
