import moment from "moment"
import { useState } from "react"
import { useToast } from "./ui/use-toast"
import { EventProps } from "@/utils/types";
import { CiLocationOn } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAccessTime, MdFavoriteBorder } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function EventCard ({event}: {
    event: EventProps
}) {
    const { toast } = useToast()
    const [isConfirmingAttendance, setIsConfirmingAttendance] = useState(false)
    const confirmAttendance = () => {
        setIsConfirmingAttendance(true)

        setTimeout(() => {
            setIsConfirmingAttendance(false)
            toast({
                variant: "destructive",
                title: "Error",
                description: "Attendance processing unavailable right now. Please try again later."
            })
        }, 2000)
    }
    return (
        <div className="cursor-pointer max-w-[300px] rounded-md bg-white border border-white shadow-md hover:shadow-xl hover:scale-[1.015] transition-all duration-300 shadow-slate-200" key={event.name}>
            <img src="/assets/images/Walking-Photo.jpg" className="rounded-t-md" loading="lazy" alt="Man Walking" />
            <div className="p-2 space-y-2">
                <h2 className="font-semibold">{event.name}</h2>
                <span className="text-slate-500 text-sm flex items-center gap-1"><MdAccessTime /> {moment(event.dateOfEvent).format("LLL")}</span>
                <p className="flex items-center gap-1 text-slate-500 text-sm"><CiLocationOn /> {event.location.place} - {event.location.county}, {event.location.country}</p>
                <ul className="flex justify-between ">
                    <li><span className="text-slate-500 text-sm flex items-center gap-1"><MdFavoriteBorder /> {event.likes} likes</span></li>
                    <li><span className="text-slate-500 text-sm flex items-center gap-1"><FaPeopleGroup /> Everyone</span></li>
                </ul>
                <Separator />
                <ul className="flex justify-between">
                    <li><Button variant="outline">Support</Button> </li>
                    <li><Button onClick={confirmAttendance}>{isConfirmingAttendance ? <ClipLoader color="white" size={20} /> : "Attend"}</Button></li>
                </ul>
            </div>
        </div>
    )
}