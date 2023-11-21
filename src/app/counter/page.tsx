'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { increment, decrement } from '@/redux/features/counter/counterSlice'

export default function Character() {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <main className="my-10 flex min-h-screen flex-col items-center">
        <h2>Count: {count}</h2>
        <div className="flex items-center justify-center space-x-6">
          <button
            className="rounded-sm bg-red-500 px-4 py-2 text-white"
            type="button"
            onClick={decrementHandler}
          >
            Decrement
          </button>
          <button
            className="rounded-sm bg-blue-500 px-4 py-2 text-white"
            type="button"
            onClick={incrementHandler}
          >
            Increment
          </button>
        </div>
      </main>
    </div>
  )
}
