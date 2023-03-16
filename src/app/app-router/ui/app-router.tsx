import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { routeConfig } from "@/shared/route-config/route-config"

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
