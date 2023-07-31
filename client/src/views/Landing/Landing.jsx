import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center bg-slate-600'>
      <h1 className='pb-16'>Welcome to Rick and Morty App</h1>
      <h3 className='text- pb-8 max-w-md'>
        This app is designed to help you get detailed information about all your
        favourites Rick and Morty characters
      </h3>
      <button onClick={() => navigate('/home')}>Get started</button>
    </div>
  )
}
