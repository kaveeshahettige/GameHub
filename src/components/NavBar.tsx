import React from 'react'

import { HStack,Image } from '@chakra-ui/react'
import logo from '../assets/gamelogo.jpg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <>
    <HStack justifyContent={'space-between'}>
      <Image src={logo} boxSize="70px" p={2}></Image>
      <ColorModeSwitch/>

    </HStack>
    </>
  )
}

export default NavBar

