import "twin.macro"
import { Outlet } from "react-router-dom"
import { MainHeader } from "./components/MainHeader"

// TODO: Write the main layout
export const MainLayout = () => {
  const headerTwHeight = "h-14";

  return (
    <>
      <MainHeader />
      <div tw="flex h-screen flex-col">
        <div tw="h-14" />
        <div tw="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  )
}