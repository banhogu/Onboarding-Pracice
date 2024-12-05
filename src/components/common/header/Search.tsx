'use client'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  const [value, setValue] = useState('AMD 라이젠 9800X3D 출시')

  return (
    <div className="border border-purple-500 px-6 py-4 rounded-full  flex items-center justify-between ">
      <input
        type="text"
        className="w-full font-medium text-[16px] outline-none"
        placeholder="검색어를 입력해주세요."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setValue('')}
      />
      <div className="">
        <FiSearch size={26} color="black" className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Search
