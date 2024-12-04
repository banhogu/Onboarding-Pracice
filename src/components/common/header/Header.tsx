import React from 'react'
import Logo from './Logo'
import Search from './Search'
import RealTime from './RealTime'

const Header = () => {
  return (
    <div className="flex items-center justify-between mx-[100px] py-4 gap-10">
      <div>
        <Logo />
      </div>
      <div className="flex-1 flex-shrink-0">
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
