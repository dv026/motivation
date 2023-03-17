import clsx from "clsx"
import { ButtonHTMLAttributes, FC } from "react"

import cls from "./button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: EButtonVariant
}

export enum EButtonVariant {
  Clear = "clear",
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = EButtonVariant.Clear,
  ...other
}) => (
  <button className={clsx(cls.button, className, cls[variant])} {...other}>
    {children}
  </button>
)
