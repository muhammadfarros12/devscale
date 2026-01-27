interface HeaderProps{
    username: string
}

export const Header = ({ username }: HeaderProps) => {
  return (
    <header className="flex justify-between bg-black text-white p-4">
        <div>Devscale</div>
        <div className="flex gap-2 items-center">
            <div>{ username }</div>
            <div className="bg-blue-700 text-white font-medium size-8 rounded-full flex justify-center items-center">{ username.charAt(0) }</div>
        </div>
    </header>
  )
}