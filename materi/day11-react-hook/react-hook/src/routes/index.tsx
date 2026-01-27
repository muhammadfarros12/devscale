import { Dashboard } from '@/components/dashboard'
import { Header } from '@/components/header'
import { SideBar } from '@/components/sidebar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
   // ambil data api
   
    return { username: 'JohnDoe' }
  }
})

function App() {
  const data = Route.useLoaderData()
  return (
    <main className='h-screen'>
      <Header username={data.username} />
      <div className='flex h-full'>
      <SideBar username={data.username}/>
      <Dashboard username={data.username}/>
      </div>
    </main>
  )
}
