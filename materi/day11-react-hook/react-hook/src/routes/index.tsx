import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  // setState
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })
  return (
    <div className='flex justify-center items-center h-screen bg-amber-50'>
      <div className='w-[300px]'>
        <input
          onChange={(event) => { setLoginData({ ...loginData, username: event.target.value }) }}
          className='p-2 rounded-lg border'
          type="text" />

        <input
          onChange={(event) => { setLoginData({ ...loginData, password: event.target.value }) }}
          className='p-2 rounded-lg border'
          type="password" />

        <div>Username: {loginData.username}</div>
        <div>Password: {loginData.password}</div>
      </div>
    </div>
  )
}
