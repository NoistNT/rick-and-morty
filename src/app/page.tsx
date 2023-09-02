// import { useGetCharactersQuery } from '@/redux/api/characterApi'
'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { increment, decrement } from '@/redux/features/counter/counterSlice'

export default function Home() {
  // const { data, error, isLoading, isFetching } = useGetCharactersQuery(null)
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Rick and Morty</h1>
      <h2>Count: {count}</h2>
      <div className='flex items-center justify-center space-x-6'>
        <button
          onClick={incrementHandler}
          className='bg-blue-500 px-4 py-2 text-white rounded-sm'
        >
          Increment
        </button>
        <button
          onClick={decrementHandler}
          className='bg-red-500 px-4 py-2 text-white rounded-sm'
        >
          Decrement
        </button>
      </div>
    </main>
  )
}
