import { RouteProps } from "react-router-dom"

import { HomePage } from "../../pages/home-page"
import { LoginPage } from "../../pages/login-page"
import { SettingsPage } from "../../pages/settings-page"

export enum EAppRoutes {
  Home = "/",
  Login = "/login",
  Settings = "/settings",
}

export const routeConfig: RouteProps[] = [
  {
    path: EAppRoutes.Home,
    element: <HomePage />,
  },
  {
    path: EAppRoutes.Login,
    element: <LoginPage />,
  },
  {
    path: EAppRoutes.Settings,
    element: <SettingsPage />,
  },
]
