interface SidebarProps{
    username: string
}

export const SideBar = ({ username }: SidebarProps) => {
  return (
    <div className="bg-blue-500 text-white w-[300px] h-full p-4">
        <div>Dashboard</div>
        <div>Courses</div>
        <div>Bootcamp</div>
        <div>settings: { username }</div>
    </div>
  )

}