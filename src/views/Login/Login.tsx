import axios from 'axios'
import { useEffect } from 'react'

export default function Login() {
  const handleSignInClick = () => {
    axios.get("http://localhost:3000/auth/twitter")
  }

  const fetchImage = async () => {
const response = await axios.get("http://localhost:3000/api/v1/file/image/1704803310651-tr30x9a.png")

console.log(response)
    
  }

  useEffect( () => {
    fetchImage()
  }, [])
  return <div>
    <button onClick={handleSignInClick}>SignIn With Twiiter</button>
  </div>
}
