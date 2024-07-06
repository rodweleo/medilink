import { useEffect, useRef } from "react";
import { IoCameraReverseOutline } from "react-icons/io5";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { IoIosAdd } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineCallEnd } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { FaVideoSlash } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";

export const Call = () => {
    const navigate = useNavigate()
    const videoContainerRef = useRef<HTMLVideoElement | null>(null)
    const handleSuccess = (videoStream: MediaStream) => {
      if(videoContainerRef.current){
        videoContainerRef.current.srcObject = videoStream;
        videoContainerRef.current.onloadedmetadata = () => {
          videoContainerRef.current?.play();
        }
      }
     
    }
  
    useEffect(() => {
        const getVideoStream = async () => {
            try{
                const videoStream = await navigator.mediaDevices.getUserMedia({
                  audio: false,
                  video: {
                    facingMode: "user"
                  }
                })
          
                handleSuccess(videoStream)
                //e.target.disabled = true;
              }catch(error){
                console.log(error)
            }
        }
        getVideoStream()
    }, [])

    return <main className="overflow-y-scroll min-h-screen w-full">
        <article className="flex flex-wrap gap-5">
            <section className="bg-gray-200 p-5 rounded-xl space-y-4 w-fit">
                <div className="flex gap-2 items-center">
                    <IoIosArrowRoundBack  className="text-2xl cursor-pointer hover:scale-[1.25] transition-all duration-300" onClick={() => navigate(-1)}/>
                    <ul>
                        <li><h1 className="font-semibold text-lg">Manivas Test Call</h1></li>
                        <li><span className="text-slate-500 text-sm">{moment().format("LLL")}</span></li>
                    </ul>
                </div>
                <section className="flex flex-col space-y-5 rounded-xl w-fit">
                    <ul className="flex gap-2">
                        <li><Button variant="outline" className="rounded-full w-20 flex items-center gap-1"><IoPeopleOutline /> <span>1</span></Button></li>
                        <li><Button variant="outline" className="rounded-full bg-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300 text-white"><IoIosAdd className="text-xl"/> <span>Add People</span></Button></li>
                    </ul>
                    <video ref={videoContainerRef} autoPlay={true} className="rounded-3xl relative w-full">
                    </video>
                    <ul className="flex justify-center items-center gap-5">
                        <li><button title="Rotate camera" type="button"><IoCameraReverseOutline className="text-3xl"/></button></li>
                        <li><Button className="rounded-full flex items-center gap-1 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white"><MdOutlineCallEnd /> <span>End Meeting</span></Button></li>
                        <li><button title="Record Call" type="button" className="flex items-center gap-[2px]"><BsFillRecordCircleFill  className="text-red-500 text-sm"/> <span className="text-slate-500 text-sm">Record</span></button> </li>
                        <li><button title="Show menu" type="button" className="bg-white p-2.5 rounded-full"><CiMenuKebab /></button></li>
                    </ul>
                </section>  
            </section>
            <section className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold text-xl">Participants</h1>
                            <Button className="p-0 m-0 bg-transparent hover:bg-transparent text-slate-500">View All</Button>
                        </div>
                        <ul>
                            <li>
                                <div className="flex items-center justify-between gap-2 bg-gray-200 p-3 rounded-full w-[250px]">
                                    <div className="flex gap-[4px]">
                                        <img src="/assets/images/Profile_avatar_placeholder_large.png" width="30" className="rounded-full"/>
                                        <span className="text-lg font-semibold">Me</span>
                                    </div>
                                    <ul className="flex items-center gap-4 text-slate-500 text-lg">
                                        <li><button title="Mute"><FaMicrophoneSlash /></button></li>
                                        <li><button title="Disable video"><FaVideoSlash /></button></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl">Calls</h1>
                        <Button className="p-0 m-0 bg-transparent hover:bg-transparent text-slate-500">View All</Button>
                    </div>
                </section>
        </article>
    </main>
}