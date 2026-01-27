import { userAtom } from '@/atoms/userAtoms'
import { Dashboard } from '@/components/dashboard'
import { Header } from '@/components/header'
import { SideBar } from '@/components/sidebar'
import { createFileRoute } from '@tanstack/react-router'
import { useHydrateAtoms } from 'jotai/utils'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    // ambil data api

    return { username: 'JohnDoe' }
  }
})

function App() {
  const data = Route.useLoaderData()
  // const setUserData = useSetAtom(userAtom)

  // useEffect(() => {
  //   setUserData({username: data.username})
  // }, [data, setUserData])

  // dijalankan dalam keadaan posisi hydration (dijalankan sebelum tampilan ditampilkan)
  useHydrateAtoms([[userAtom, { username: data.username }]])

  return (
    <main className='h-screen'>
      <Header />
      <div className='flex h-full'>
        <SideBar />
        <Dashboard />
      </div>
    </main>
  )
}
