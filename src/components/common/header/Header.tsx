import React from 'react'
import Logo from './Logo'
import Search from './Search'
import RealTime from './RealTime'

const Header = () => {
  return (
    <div className="flex items-center justify-between mx-[100px] py-4 gap-4">
      <div>
        <Logo />
      </div>
      <div className="max-w-[600px] w-full">
        <Search />
      </div>
      <div>
        {' '}
        <RealTime />
      </div>
    </div>
  )
}

export default Header
