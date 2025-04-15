import React from 'react'
import { Menubar } from './ui/menubar'
import {Menu} from './Menu'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <div className=' flex justify-end gap-2 px-2 '>
      <Menu />
      <ModeToggle/>
    </div>
  )
}

export default Navbar
