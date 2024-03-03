'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="flex h-[80vh] w-full items-center justify-center text-center">
      <h2 className="text-xl text-neutral-400">Character not found</h2>
      <button type="button" onClick={() => reset()}>
        Go back
      </button>
    </div>
  )
}
