import { ReactNode } from "react"

type ItemCardProps={
    label:string,
    value:number
}

export default function ItemCard({value,label}:ItemCardProps){
    return(
        <div className=" flex w-96 gap-8 bg-gradient-to-r from-blue-300 to-green-400 hover:from-green-400 hover:to-blue-300 hover:scale-110 hover:cursor-pointer transition-all ease-in-out rounded-lg shadow-md py-6 items-center">
          <div className="ml-2 text-xl text-blue-950 opacity-65 font-bold">
            {label}
          </div>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
    )
}