import "twin.macro";
// import { HamburgerMenuIcon } from "../../icons/HamburgerMenuIcon";
import { Btn } from "../../shared/buttons";
import { RxHamburgerMenu } from "react-icons/rx"

export const MobileMenuNav = () => {
  return (
    <>
      {/* Toggler */}
      <span tw="inline-block md:hidden">
        <Btn tw="ml-2 mr-2">
          {/* <HamburgerMenuIcon /> */}
          <RxHamburgerMenu tw="w-6 h-6" />
        </Btn>
      </span>

      {/* TODO: Menu content */}
    </>
  )
}