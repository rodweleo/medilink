import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";


type IssueProps = {
  image_url: string,
  name: string,
  description: string
}
export default function IssueCard({ issue, index }: {
  issue: IssueProps,
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
      viewport={{ once: false }}
    >
      <div
        className="bg-white h-fit max-w-[600px] rounded-md p-5 flex flex-wrap gap-5"
        key={index}
      >
        <img
          src={issue.image_url}
          className="rounded-md max-xl:w-full"

          loading="lazy"
          alt={issue.name}
        />
        <div className="flex flex-col justify-between max-w-[200px]">
          <div>
            <h1 className="font-bold text-xl">{issue.name}</h1>
            <p>{issue.description}</p>
          </div>
          <a href="#" className="flex items-center gap-2 hover:gap-3 transition-all duration-300 ease-in-out hover:underline font-bold">
            Learn More <FaArrowRightLong />
          </a>
        </div>
      </div>
    </motion.div>

  )
}