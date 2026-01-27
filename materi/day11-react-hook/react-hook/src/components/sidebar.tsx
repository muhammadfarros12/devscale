import { userAtom } from "@/atoms/userAtoms"
import { useAtomValue } from "jotai"


export const SideBar = () => {
  const userData = useAtomValue(userAtom)
  return (
    <div className="bg-blue-500 text-white w-[300px] h-full p-4">
        <div>Dashboard</div>
        <div>Courses</div>
        <div>Bootcamp</div>
        <div>settings: { userData.username }</div>
    </div>
  )

}