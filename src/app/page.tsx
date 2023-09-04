'use client'

import { useGetCharactersQuery } from '@/redux/api/characterApi'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { increment, decrement } from '@/redux/features/counter/counterSlice'

export default function Home() {
  const { data, error, isLoading, isFetching } = useGetCharactersQuery(1)
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
      <h2>Characters</h2>
      <div className='flex items-center justify-center space-x-6'>
        {isLoading && <h2 className='text-xl'>Loading...</h2>}
        {isFetching && <h2 className='text-xl'>Fetching...</h2>}
        {error && <h2 className='text-xl'> Error</h2>}
        {data && (
          <div>
            <h2 className='text-xl'>Total characters: {data.info.count}</h2>
            {data.results.map((character) => (
              <div key={character.id}>
                <h2 className='text-xl'>{character.name}</h2>
                <h2>{character.gender}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
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
  )
}
