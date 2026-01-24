import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  // setState
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='flex justify-center items-center h-screen bg-amber-50'>
      <div className='w-[300px]'>
        <input
          onChange={(event) => { setUsername(event.target.value) }}
          className='p-2 rounded-lg border'
          type="text" />

        <input
          onChange={(event) => { setPassword(event.target.value) }}
          className='p-2 rounded-lg border'
          type="password" />
          
        <div>Username: {username}</div>
        <div>Password: {password}</div>
      </div>
    </div>
  )
}
