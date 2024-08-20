import { ReactNode } from "react"

export default function BookingProcessCard({ bookingProcess }: {
    bookingProcess: {
        icon: ReactNode,
        title: string,
        description: string
    }
}) {
    return (
        <div key={bookingProcess.title} className="bg-slate-200 p-5 border-2 border-slate-800 rounded-md max-w-xl">
            <div className="flex gap-2.5">
                {bookingProcess.icon}
                <div>
                    <h2 className="font-bold text-2xl">{bookingProcess.title}</h2>
                    <p className="text-slate-500">
                    {bookingProcess.description}
                    </p>
                </div>
            </div>
        </div>
    )
}