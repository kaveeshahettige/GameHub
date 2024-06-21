import { HStack,Image } from '@chakra-ui/react'
import logo from '../assets/gamelogo.jpg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <>
    <HStack >
      <Image src={logo} boxSize="70px" p={2}></Image>
      <SearchInput/>
      <ColorModeSwitch/>

    </HStack>
    </>
  )
}

export default NavBar

