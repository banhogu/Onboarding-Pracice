import { realTimeType } from '@/src/models/realTime.type'
import React from 'react'
import { format } from 'date-fns'

const RealTimeItem = ({ time, title, price }: realTimeType) => {
  return (
    <div className="flex items-center text-sm gap-2 font-medium">
      <div>
        {'['} {format(new Date(time), 'HH:mm')} {']'}
      </div>
      <div>{title}</div>
      <div className="font-bold">{price?.toLocaleString()}원</div>
    </div>
  )
}

export default RealTimeItem
