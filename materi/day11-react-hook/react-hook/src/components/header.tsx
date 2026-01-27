import { userAtom } from "@/atoms/userAtoms"
import { useAtomValue } from "jotai"


export const Header = () => {
  const userData = useAtomValue(userAtom)

  return (
    <header className="flex justify-between bg-black text-white p-4">
        <div>Devscale</div>
        <div className="flex gap-2 items-center">
            <div>{ userData.username }</div>
            <div className="bg-blue-700 text-white font-medium size-8 rounded-full flex justify-center items-center">{ userData.username.charAt(0) }</div>
        </div>
    </header>
  )
}