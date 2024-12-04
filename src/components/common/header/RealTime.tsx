'use client'
import { getRealTime } from '@/src/factory/RealTime'
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import RealTimeItem from './RealTimeItem'

const RealTime = () => {
  const { data, isLoading } = getRealTime()

  if (isLoading) {
    return <div className="w-[150px]" />
  }

  return (
    <div className="flex items-center gap-2">
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
    </div>
  )
}

export default RealTime
