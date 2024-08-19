import { ReactNode } from "react"


type BenefitProps = {
    icon: ReactNode,
    title: string,
    description: string
}
export default function BenefitCard({ benefit, index }: {
    benefit: BenefitProps,
    index: number
}) {
    return (
        <div key={index} className="bg-slate-200 p-5 border-2 border-slate-800 rounded-md">
            <div className="flex gap-2.5">
                {benefit.icon}
                <div>
                    <h2 className="font-bold text-2xl">{benefit.title}</h2>
                    <p className="text-slate-500">
                        {benefit.description}
                    </p>
                </div>
            </div>
        </div>

    )
}