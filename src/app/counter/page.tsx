'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { increment, decrement } from '@/redux/features/counter/counterSlice'
import Nav from '@/components/Nav'

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
      <Nav />
      <main className='flex min-h-screen flex-col items-center my-10'>
        <h2>Count: {count}</h2>
        <div className='flex items-center justify-center space-x-6'>
          <button
            onClick={decrementHandler}
            className='bg-red-500 px-4 py-2 text-white rounded-sm'
          >
            Decrement
          </button>
          <button
            onClick={incrementHandler}
            className='bg-blue-500 px-4 py-2 text-white rounded-sm'
          >
            Increment
          </button>
        </div>
      </main>
    </div>
  )
}
