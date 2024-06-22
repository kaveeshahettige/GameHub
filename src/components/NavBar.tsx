import { HStack,Image } from '@chakra-ui/react'
import logo from '../assets/gamelogo.jpg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


interface Props{
  onSearch:(searchText:string)=>void;

}

const NavBar = ({onSearch}:Props) => {
  return (
    <>
    <HStack >
      <Image src={logo} boxSize="70px" p={2}></Image>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>

    </HStack>
    </>
  )
}

export default NavBar

