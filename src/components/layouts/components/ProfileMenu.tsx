import { PropsWithChildren } from "react";
import tw from "twin.macro";
import { BtnLink } from "../../shared/buttons";

export const ProfileMenu = () => {
  return (
    <Container>
      <ul tw="text-gray-800">
        <BorderedLi tw="mb-2">
          <MenuLink to="/radandevist">
            <div>
              <FullName>Andrianarisoa Daniel</FullName>
              <UserName>@radandevist</UserName>
            </div>
          </MenuLink>
        </BorderedLi>

        <li>
          <MenuLink to="/dashboard">Dashboard</MenuLink>
        </li>
        <li>
          <MenuLink to="/new">Create Post</MenuLink>
        </li>
        <li>
          <MenuLink to="/readinglist">Reading list</MenuLink>
        </li>
        {/* the n-1 item has a border-bottom */}
        <BorderedLi>
          <MenuLink to="/settings">Settings</MenuLink>
        </BorderedLi>

        <li tw="pt-2">
          <MenuLink to="/logout">Sign Out</MenuLink>
        </li>
      </ul>
    </Container>
  )
}

const Container = tw.div`hidden absolute p-2 mt-1 bg-white text-gray-900 rounded-md top-full right-2 left-2 z-40 shadow-md min-w-[250px]`
const BorderedLi = tw.li`border-b border-solid border-gray-300 pb-2`
const FullName = tw.span`font-medium block leading-tight`
const UserName = tw.span`text-sm opacity-75`
const MenuLink = ({ to, children  }: PropsWithChildren<{ to: string }>) => (
  <BtnLink to={to} tw="flex !text-left !px-4">
    {children}
  </BtnLink>
)