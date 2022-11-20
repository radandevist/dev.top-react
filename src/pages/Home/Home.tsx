import tw from "twin.macro"
import { HamburgerMenuIcon } from "./components/HamburgerMenuIcon"

const MySpan = tw.span`inline-block bg-red-500`

const Home = () => {
  return (
    <header tw="fixed top-0 left-0 right-0">
      <div tw="max-w-screen-xl m-auto flex items-center relative h-14">
        {/* Hamburger menu icon */}
        {/* <span tw="inline-block md:hidden"> */}
          <MySpan>
            <button tw="ml-2 mr-2 p-2 bg-transparent text-gray-900 hover:bg-indigo-700/10 hover:text-indigo-700 relative inline-block rounded-md text-center cursor-pointer">
              <HamburgerMenuIcon />
            </button>
          </MySpan>
        {/* </span> */}

        {/* Logo */}
        <a href="/" className="[overflow-wrap:anywhere]" tw="max-w-[7.8125rem] inline-flex flex-shrink-0 self-center items-center align-middle text-black no-underline leading-none outline-none tracking-tight cursor-pointer">
          <img tw="max-w-full w-auto h-10 object-contain align-middle inline-block outline-none" src="/logo.png" alt="DEV Community 👩‍💻👨‍💻" />
        </a>

        {/* Search form */}
        <div tw="max-w-[26.25rem] flex-auto mx-2 hidden">

        </div>

        {/* Right items */}
        <div tw="flex ml-auto h-full items-center">
          
        </div>
      </div>
    </header>
  )
}

export default Home