import React from 'react'

import { HStack,Image } from '@chakra-ui/react'
import logo from '../assets/gamelogo.jpg'

const NavBar = () => {
  return (
    <>
    <HStack>
      <Image src={logo} boxSize="70px" p={2}></Image>


    </HStack>
    </>
  )
}

export default NavBar

