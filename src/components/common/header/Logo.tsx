import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        src={'https://img.danawa.com/new/shop_danawa/img/img_logo_main.png'}
        width={200}
        height={200}
        alt="logo"
        className="cursor-pointer"
      />
    </Link>
  )
}

export default Logo
