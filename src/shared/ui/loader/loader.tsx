import { ReactComponent as Spinner } from "./../../assets/icons/spinner.svg"
import cls from "./loader.module.scss"

export const Loader = () => {
  return <Spinner className={cls.loader} />
}
