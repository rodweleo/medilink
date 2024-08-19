import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";


type ServiceProps = {
    image_url: string,
    title: string,
    slug: string,
    description: string
}
export default function ServiceCard({ service, index }:{
    service: ServiceProps,
    index: number
}) {
    return (
        <motion.div
            className="card"
            initial={{
                opacity: 0,
                x: index % 2 === 0 ? 50 : -50
            }}
            whileInView={{
                opacity: 1,
                x: 0, 
                transition: {
                    duration: 1 
                }
            }}
            viewport={{ once: true }}
        >
            <div className="sm:w-[400px] w-[200px] rounded-md" key={index}>
                <img src={service.image_url} alt={service.title} width="100%" />
                <a
                    href={service.slug}
                    className="bg-black backdrop-blur-md p-2.5 flex items-center justify-between"
                >
                    <div>
                        <h1 className="font-bold sm:text-xl text-white">
                            {service.title}
                        </h1>
                        <p className="text-slate-200">{service.description}</p>
                    </div>
                    <MdArrowForwardIos className="text-white" />
                </a>
            </div>

        </motion.div>

    )
}