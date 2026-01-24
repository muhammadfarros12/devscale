import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  // setState
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    isAdmin: false
  })

  // digunakan untuk menjalankan fungsi secara langsung apabila ada perubahan dalam data yang ada dalam pantauan
  useEffect(() => {
    setLoginData(prev => ({
      ...prev,
      isAdmin:
        prev.username === 'admin' &&
        prev.password === 'admin'
    }))
  }, [loginData.username, loginData.password])

  return (
    <div className='flex justify-center items-center h-screen bg-amber-50'>
      <div className='w-[300px] space-y-4'>
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
        <div className='text-4xl'>{loginData.isAdmin ? "welcome admin" : null}</div>
      </div>
    </div>
  )
}
