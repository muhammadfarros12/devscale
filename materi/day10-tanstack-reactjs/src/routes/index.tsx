import { Header } from '@/components/header'
import { NameCard } from '@/components/nameCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

interface User {
  id: number,
  name: String,
  age: number,
  gender: "male" | "female"
}

function App() {
  const users: User[] = [
    { id: 1, name: 'reza', age: 30, gender: "male" },
    { id: 2, name: 'rezaa', age: 30, gender: "female" },
    { id: 3, name: 'rezab', age: 30, gender: "male" },
    { id: 4, name: 'rezac', age: 30, gender: "female" },
    { id: 5, name: 'rezad', age: 30, gender: "male" },
  ]


  return (
    <div className="">
      <Header />
      <div className="">Hello index</div>
      {/* <NameCard name='farros' age={42} gender='male' />
      <NameCard name='fulanah' age={20} gender='female' /> */}
      {
        users.map((user) => {
          return <NameCard
            key={user.id}
            name={user.name}
            age={user.age}
            gender={user.gender} />
        })
      }

    </div>
  )
}
