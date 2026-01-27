import { userAtom } from "@/atoms/userAtoms"
import { useAtomValue } from "jotai"

export const Dashboard = () => {

  const userData = useAtomValue(userAtom)

  return (
    <div className="flex flex-1 p-4">
        <div className="text-3xl">Welcome back {userData.username}</div>
    </div>
  )
}

