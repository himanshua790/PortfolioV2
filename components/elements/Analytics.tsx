'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { GoogleTagManager } from '@next/third-parties/google'
import { Suspense, useEffect } from 'react'

import { sendPageView } from '@/common/libs/gtm'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const GTM_ID = process.env.GTM_ID || ''

  useEffect(() => {
    if (pathname) {
      sendPageView(pathname)
    }
  }, [pathname, searchParams])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GoogleTagManager gtmId={GTM_ID} />
    </Suspense>
  )
}

// Import Suspense from React
