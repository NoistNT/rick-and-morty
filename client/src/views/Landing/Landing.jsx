import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to Rick and Morty App</h1>
      <h2>Discover information about Rick and Morty characters</h2>
      <button onClick={() => navigate('/home')}>Get started</button>
    </div>
  )
}
