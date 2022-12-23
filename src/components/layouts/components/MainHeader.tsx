import "twin.macro"
// import { NotificationIcon } from "../../icons/NotificationIcon"
// import { SearchIcon } from "../../icons/SearchIcon"
import { Btn, BtnLink } from "../../shared/buttons"
import { DevLogo } from "./DevLogo"
import { MobileMenuNav } from "./MobileMenuNav"
import { ProfileMenu } from "./ProfileMenu"
import { RiNotification3Line, RiSearchLine } from "react-icons/ri"

export const MainHeader = () => {
  return (
    <header tw="fixed top-0 left-0 right-0 z-10 bg-white shadow-crayon">
      <div tw="max-w-screen-xl m-auto px-2 flex items-center relative h-14">
        <MobileMenuNav />
        <DevLogo />

        {/* Search form */}
        <div tw="max-w-[26.25rem] flex-auto mx-2 hidden md:(block)">
          {/* TODO: the search form only visible on md+ screens */}
          <form>
            <div tw="flex-row flex-wrap flex">
              <div tw="relative flex-1 flex flex-col">
                <input type="text" autoComplete="off" placeholder="Search..." tw="outline-0 leading-[1.5] py-[7px] px-2 w-full resize-y border border-gray-300 text-gray-800 rounded-md transition-all ease-out duration-500 hover:border-gray-400 focus:(border-indigo-700 shadow-[0_0_0_1px] shadow-indigo-700 outline-none)" />
                
              </div>
            </div>
          </form>
        </div>

        {/* Right items */}
        <div tw="flex ml-auto h-full items-center">
          {/* Search Icon */}
          <BtnLink tw="md:hidden" to="/search">
            {/* <SearchIcon /> */}
            <RiSearchLine tw="w-6 h-6" />
          </BtnLink>

          {/* Create Post button only visible on m+ screens */}
          <span tw="hidden md:flex ml-auto">
            {/* TODO: The Create Post Button */}
            <BtnLink to="/new" variant="outlined" tw="!px-4 !py-[7px] mr-2">Create Post</BtnLink>
          </span>

          {/* Notification Icon */}
          <BtnLink tw="mx-1" to="/notifications">
            {/* <NotificationIcon /> */}
            <RiNotification3Line tw="w-6 h-6" />
          </BtnLink>

          {/* User Avatar */}
          <div tw="mx-1">
            <Btn tw="!rounded-full !p-1">
              {/* Image, This is going to be used over and over again */}
              <span tw="w-8 h-8 pointer-events-none inline-block relative bg-gray-700 overflow-hidden align-middle shrink-0 rounded-full">
                <img src="/avatar.png" alt="user avatar" tw="pointer-events-none w-full h-full inline-block align-bottom rounded-full" />
              </span>

              {/* Profile menu */}
              <ProfileMenu />
            </Btn>
          </div>
        </div>
      </div>
    </header>
  )
}