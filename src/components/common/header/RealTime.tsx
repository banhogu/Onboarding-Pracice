'use client'
import { getRealTime } from '@/src/factory/RealTime'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useState } from 'react'
import { Autoplay } from 'swiper/modules'
import RealTimeItem from './RealTimeItem'
import { format } from 'date-fns'

import 'swiper/css'

const RealTime = () => {
  const { data, isLoading } = getRealTime()
  const [isMouseOn, setIsMouseOn] = useState(false)

  if (isLoading) {
    return <div className="w-[550px]" />
  }

  return (
    <div
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
      className="flex items-center gap-2 relative"
    >
      <div className="text-[14px] font-semibold mr-6">▪️ 실시간 PC견적</div>
      <Swiper
        direction={'vertical'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper flex-1 h-[21px] "
      >
        {Array.isArray(data) && data.length > 0
          ? data.map((item, i) => {
              // item이 정의되어 있고, time 속성이 있는지 체크
              if (item && item.time) {
                return (
                  <SwiperSlide key={i}>
                    <RealTimeItem
                      time={item.time}
                      title={item.title}
                      price={item.price}
                    />
                  </SwiperSlide>
                )
              }
              return null // item이 없거나 time이 없는 경우 렌더링하지 않음
            })
          : 'No data available'}
      </Swiper>

      {isMouseOn && data && (
        <div className="absolute top-0 left-0 bg-white w-full z-50 border border-gray-300 rounded-sm">
          <div className="p-[6px] text-[14px] font-semibold bg-zinc-100">
            ▪️ 실시간 PC견적
          </div>
          <div className="flex flex-col gap-2 p-3">
            {data.slice(0, 10).map((item, i) => (
              <div
                key={i}
                className="flex items-center text-sm font-medium justify-between"
              >
                <div className="flex gap-2">
                  <div>
                    {'['} {format(new Date(item.time), 'HH:mm')} {']'}
                  </div>
                  <div>{item.title}</div>
                </div>

                <div className="font-bold">
                  {item.price?.toLocaleString()}원
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RealTime
