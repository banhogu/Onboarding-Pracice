'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiHome6Line } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { isAfter } from 'date-fns'

const Gnb = () => {
  const [isMouseOn, setIsMouseOn] = useState(false)

  return (
    <div className=" border-b border-gray-200 shadow-sm ">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={'/'} className="border-x-2 border-gray-200 p-3">
            <RiHome6Line size={24} className="text-gray-700" />
          </Link>
          <div className="flex gap-6 text-gray-700 font-medium text-[15px]">
            <Link href={'/'} className="hover:underline hover:text-black ">
              PC26
            </Link>

            <Link href={'/'} className="hover:underline hover:text-black ">
              싼컴
            </Link>
            <Link href={'/'} className="hover:underline hover:text-black ">
              PC구매상담
            </Link>
            <Link href={'/'} className="hover:underline hover:text-black ">
              기업구매상담
            </Link>
            <div
              onMouseEnter={() => setIsMouseOn(true)}
              onMouseLeave={() => setIsMouseOn(false)}
              className="flex items-center gap-[6px] cursor-pointer relative w-[200px]"
            >
              <div
                className={`
                    ${isMouseOn ? 'underline text-gray-900' : ''}
                      `}
              >
                로그인
              </div>
              {isMouseOn ? <IoIosArrowUp /> : <IoIosArrowDown />}
              {isMouseOn && (
                <div className="text-[14px] gap-2 absolute top-6 left-0 flex flex-col bg-white border border-gray-400 p-3 rounded-lg shadow-sm">
                  <Link href={'/'} className="hover:underline hover:text-black">
                    로그인
                  </Link>
                  <Link href={'/'} className="hover:underline hover:text-black">
                    회원가입
                  </Link>
                  <Link href={'/'} className="hover:underline hover:text-black">
                    나의 쇼핑내역
                  </Link>
                  <Link href={'/'} className="hover:underline hover:text-black">
                    장바구니
                  </Link>
                  <Link href={'/'} className="hover:underline hover:text-black">
                    고객센터
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-6 text-gray-700 font-medium text-[15px] mr-3">
          <Link href={'/'} className="hover:underline hover:text-black">
            다나와
          </Link>
          <Link href={'/'} className="hover:underline hover:text-black">
            에누리
          </Link>
          <Link href={'/'} className="hover:underline hover:text-black">
            몰테일
          </Link>
          <Link href={'/'} className="hover:underline hover:text-black">
            플레이오토
          </Link>
          <Link href={'/'} className="hover:underline hover:text-black">
            메이크샵
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Gnb