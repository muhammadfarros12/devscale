interface DashboardProps{
    username: string
}

export const Dashboard = ({ username }: DashboardProps) => {
  return (
    <div className="flex flex-1 p-4">
        <div className="text-3xl">Welcome back {username}</div>
    </div>
  )
}

