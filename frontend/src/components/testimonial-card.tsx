import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


type TestimonialProps = {
    body: string,
    customer_name: string,
    occupancy: string
}
export default function TestimonialCard({ testimonial, index }: {
    testimonial: TestimonialProps,
    index: number
}) {
    return (
        <div
            className="h-fit bg-slate-100 w-[300px] border rounded-xl"
            key={index}
        >
            <p className="p-5 h-[250px] overflow-y-auto">
                "{testimonial.body}"
            </p>
            <div className="bg-slate-800 rounded-b-xl p-5 flex items-center gap-2.5">
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ul>
                    <li>
                        <h2 className="text-white font-bold text-xl">
                            {testimonial.customer_name}
                        </h2>
                    </li>
                    <li>
                        <p className="text-slate-200 font-medium text-md">
                            {testimonial.occupancy}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}