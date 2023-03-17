import clsx from "clsx"
import { FC } from "react"
import {
  LinkProps as RouterLinkProps,
  Link as RouterLink,
} from "react-router-dom"

import cls from "./link.module.scss"

export enum ELinkVariant {
  Normal = "normal",
  Special = "special",
}

interface LinkProps extends RouterLinkProps {
  className?: string
  variant?: ELinkVariant
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  variant = ELinkVariant.Normal,
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
