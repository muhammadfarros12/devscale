import { Home, Megaphone } from "lucide-react";

interface NameCardProps {
    name: String,
    age: number,
    gender: "male" | "female"
}

export const NameCard = ({ name, age, gender }: NameCardProps) => {
    return (
        <div className={`p-4 rounded-2xl w-fit ${gender === "female" ? "bg-pink-200" : "bg-blue-200"}`}>
            {gender === 'female' ? <Home/> : <Megaphone/>}
            <div>
                Name : {name}
            </div>
            <div>
                Age : {age}
            </div>
            <div>
                gender : {gender}
            </div>
        </div>
    )
}