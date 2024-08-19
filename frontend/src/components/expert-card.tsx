import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import { Badge } from "./ui/badge";


type ExpertProps = {
  image_url: string,
  name: string,
  specialty: string
}
export default function ExpertCard({expert, index}: {
  expert: ExpertProps, 
  index: number
}){
    return (
        <div
              className="border rounded-md p-3 space-y-2.5 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out max-w-[350px] flex flex-col items-center justify-between hover:scale-[1.0075]"
              key={index}
            >
              <img
                src={expert.image_url}
                alt={expert.name}
                className="rounded-md size-64"
              />
              <div className="space-y-2.5 items-start w-full">
                <div className="flex justify-between">
                  <h2 className="font-bold text-xl">{expert.name}</h2>
                  <Badge className="bg-slate-800 hover:bg-blue-900">
                    {expert.specialty}
                  </Badge>
                </div>
                <ul className="flex gap-5 text-xl">
                  <li>
                    <FaLinkedinIn />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaFacebook />
                  </li>
                </ul>
              </div>
            </div>
    )
}