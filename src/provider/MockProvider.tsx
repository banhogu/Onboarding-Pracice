'use client'

import { useEffect, useState } from 'react'

export const MockProvider = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false)
  useEffect(() => {
    const init = async () => {
      const initMsw = await import('../mocks').then((res) => res.initMsw)
      await initMsw()
      setMswReady(true)
    }

    if (!mswReady) {
      init()
    }
  }, [mswReady])

  return <>{children}</>
}
