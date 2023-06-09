import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { routeConfig } from "@/shared/config/route-config/route-config"
import { PageLoader } from "@/widgets/page-loader/ui/page-loader"

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
