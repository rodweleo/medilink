import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EXPERTS, ISSUES, MEDILINK_BENEFITS, SERVICES, TESTIMONIALS } from "@/utils/data";
import { BriefcaseBusiness } from "lucide-react";
import { GiCheckMark } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import ServiceCard from "@/components/service-card";
import IssueCard from "@/components/issue-card";
import AnimatedCounter from "@/components/animated-counter";
import BenefitCard from "@/components/benefit-card";
import AnimatedList from "@/components/animated-list";
import TestimonialCard from "@/components/testimonial-card";
import ExpertCard from "@/components/expert-card";

const Homepage = () => {
  const navigate = useNavigate();

  const prepareCall = async () => {
    navigate("/call");
  };
  //<span className="text-yellow-600">stronger </span>
  //<span className="text-yellow-600">emotional </span>

  const text = "Elevating emotional wellness and stronger bonds for all.".split(" ")

  return (
    <main className="min-h-screen">
      <section id="#" className="p-2.5 min-h-screen w-full flex flex-col justify-center space-y-5 items-center bg-[url('/assets/images/hero-bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed filter backdrop-contrast-125">
        <div className="absolute inset-0 bg-black opacity-50 -z-50"></div>
        <h1 className="sm:text-7xl text-6xl max-w-6xl font-bold text-center text-white">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
        <div className="text-center max-w-5xl space-y-10">
          <p className="text-slate-200 text-xl sm:text-2xl font-normal">
            Discover the power of personalized therapy with MediLink, your
            only online personalized therapy aligned with your holistic,
            empathetic and Godly beliefs & other things to do.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-5 ">
            <li>
              <Button
                onClick={() =>
                  navigate("/book-appointment", {
                    replace: true,
                  })
                }
                className="w-fit bg-white text-slate-800 hover:bg-slate-200"
              >
                Book Appointment
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="flex gap-1 hover:gap-2 transition-all duration-200 text-white"
                onClick={() => prepareCall()}
              >
                <span>Hoop on a call</span> <IoIosArrowForward />
              </Button>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="our-services"
        className="flex flex-col items-center space-y-5 py-20"
      >
        <div className="text-center">
          <h3 className="font-bold">Our Services</h3>
          <h1 className="sm:text-5xl font-bold max-w-xl">What do we Offer ?</h1>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {SERVICES.map((service, index: number) => (
            <ServiceCard service={service} index={index} />
          ))}
        </div>
      </section>
      <section
        id="why-medilink"
        className="p-2.5 flex justify-center items-center space-y-5 gap-10 py-20"
      >
        <div className="space-y-5 max-w-[500px]">

          <h1 className="font-bold sm:text-5xl text-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {("We care for you, we write for You").split(" ").map((el, i) => (

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}

                  transition={{
                    duration: 0.25,
                    delay: i / 10
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>


              ))}
            </motion.div>

          </h1>
          <p className="text-slate-500">
            MedLink is an ever growing community working towards changing the
            way individuals think & act about problems related to Mental Health
            managed by the Current Generation
          </p>
          <AnimatePresence>

            <AnimatedList className="space-y-2.5">
              {
                MEDILINK_BENEFITS.map((benefit, index: number) => (
                  <motion.li key={index} variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}>
                    <BenefitCard benefit={benefit} index={index} />
                  </motion.li>

                ))
              }
            </AnimatedList>
          </AnimatePresence>
          <Button onClick={() => navigate("/book-appointment")}>
            Book Appointment
          </Button>
        </div>
        <div className="relative hidden xl:block">
          <img
            src="https://www.baptisthealth.com/-/media/images/migrated/blog-images/teaser-images/gettyimages-1015399630-1280x854.jpg?rev=91b0cae27bff4c6787ba72ea7667f4c9"
            alt="A therapist taking notes as a man speaks."
            width="868px"
            className="rounded-md hidden md:block"
          />
          <p className="hidden xl:flex absolute items-center gap-2.5 -bottom-9 right-1/3 z-20 bg-white border border-blue-200 shadow-md shadow-blue-200 px-8 py-4 rounded-lg font-bold text-xl">
            <GiCheckMark size={40} className="text-green-500 text-xl bg-green-100 p-2.5 rounded-full" />
            KMPDC Accredited
          </p>
        </div>
      </section>

      <section
        id="issues"
        className="bg-slate-100 min-h-screen flex flex-col items-center space-y-5"
      >
        <div className="bg-slate-800 h-fit w-full p-10 flex flex-col items-center space-y-5">
          <h1 className="text-white sm:text-4xl text-xl font-bold max-w-xl text-center">
            Find Providers to help you with the following issues
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center w-fit gap-10">
            {ISSUES.map((issue, index: number) => (
              <IssueCard issue={issue} index={index} />
            ))}
          </div>
        </div>

        <div className="space-y-5 py-10 px-2.5">
          <header className="text-center space-y-2.5">
            <h1 className="font-bold text-2xl sm:text-4xl">
              Create Natural Life after Treatment
            </h1>
            <p className="text-slate-500">
              MediLink patient care is paramount - the driving force is
              everything we do. <br /> LifeStance is committed to state-of-art
              clinical excellence.
            </p>
          </header>
          <article className="grid sm:grid-cols-2 grid-cols-1 place-items-center gap-5">
            <section className="bg-white rounded-xl max-w-xl p-5 space-y-2.5">
              <header className="font-bold text-xl sm:text-2xl">
                Primary Life
              </header>
              <p className="text-slate-500 leading-8">
                The primary care mental health workers provide one-to-one
                support to people within GP practices helping with discharge
                from secondary care, liaising between services and providing
                ongoing mental health support.
              </p>
              <p className="text-slate-500 leading-8">
                Listen with curiosity and empathies with them, It may be helpful
                to tell your child about other people who experience similar
                problems. If you or someone else your child thrusts have mental
                health conditions, explain that the same way you would tell them
                about diabetes.
              </p>
              <ul className="grid grid-cols-2 font-semibold gap-2.5 w-fit">
                <li className="flex items-center gap-2">
                  <GiCheckMark
                    size={30}
                    className="text-blue-500 rounded-full bg-blue-100 p-2"
                  />{" "}
                  Complete Daily Task
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark
                    size={30}
                    className="text-blue-500 rounded-full bg-blue-100 p-2"
                  />{" "}
                  Care of Time Management
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark
                    size={30}
                    className="text-blue-500 rounded-full bg-blue-100 p-2"
                  />{" "}
                  Healthy Food
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark
                    size={30}
                    className="text-blue-500 rounded-full bg-blue-100 p-2"
                  />{" "}
                  Proper Sound Sleep
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark
                    size={30}
                    className="text-blue-500 rounded-full bg-blue-100 p-2"
                  />{" "}
                  Daily Longer Walks
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark
                    size={30}
                    className="text-blue-500 rounded-full bg-blue-100 p-2"
                  />{" "}
                  Drinking Water
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark
                    size={30}
                    className="text-blue-500 rounded-full bg-blue-100 p-2"
                  />{" "}
                  Family Time
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark
                    size={30}
                    className="text-blue-500 rounded-full bg-blue-100 p-2"
                  />{" "}
                  <a href="https://smartmuscle.vercel.app" target="_blank">
                    Gym Workout
                  </a>
                </li>
              </ul>
            </section>
            <div className="relative">
              <img
                src="/assets/images/Feeling Goodjfif.jfif"
                alt="Feeling Good"
                width="500px"
                className="h-full object-fit rounded-xl"
              />

            </div>
          </article>
        </div>
      </section>

      <section
        id="traction"
        className="flex flex-col justify-center items-center space-y-5 py-20"
      >
        <h1 className="font-bold sm:text-3xl">What we've done so Far</h1>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <Card className="w-[250px] max-w-[250px]">
            <CardHeader>
              <CardTitle>
                <BriefcaseBusiness />
                <div className="flex">
                  <AnimatedCounter start={1} end={5} duration={0.5} />
                  +
                </div>
              </CardTitle>
              <CardDescription>Years of Experience</CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[250px] max-w-[250px]">
            <CardHeader>
              <CardTitle>
                <BriefcaseBusiness />
                <div className="flex">
                  <AnimatedCounter start={1} end={200} duration={0.75} />
                  +
                </div>
              </CardTitle>
              <CardDescription>Lives Improved</CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[250px] max-w-[250px]">
            <CardHeader>
              <CardTitle>
                <BriefcaseBusiness />
                <div className="flex">
                  <AnimatedCounter start={1} end={50} duration={1} />
                  +
                </div>
              </CardTitle>
              <CardDescription>Jobs Created</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      <section
        id="our-specialists"
        className="flex flex-col justify-center items-center space-y-5 py-20"
      >
        <header className="text-center">
          <h1 className="sm:text-5xl font-bold max-w-xl">
            Meet our Specialists
          </h1>
        </header>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 place-items-center">
          {EXPERTS.map((expert, index: number) => (
            <ExpertCard expert={expert} index={index} />
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="space-y-5 py-20 grid place-items-center w-full"
      >
        <header>
          <h1 className="font-bold sm:text-4xl text-2xl">
            Hear from Our Esteemed Customers
          </h1>
        </header>
        <section className="w-full grid place-items-center overflow-x-auto p-5">
          <div className="flex gap-10 w-max items-center justify-center">
            {TESTIMONIALS.map((testimonial, index: number) => (
              <TestimonialCard testimonial={testimonial} index={index}/>
            ))}
          </div>
        </section>
      </section>


      <section className="p-10 relative bg-[url('https://www.shutterstock.com/image-photo/blue-helix-human-dna-structure-600nw-1669326868.jpg')] bg-no-repeat bg-fixed bg-cover filter backdrop-contrast-125 flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-50 -z-50"></div>
        <div className="text-center max-w-5xl space-y-10">
          <h1 className="text-white text-xl sm:text-6xl font-bold">
            Ready to Begin Your Therapy Journey
          </h1>
          <p className="text-slate-200 sm:text-2xl text-xl">
            Ready for a transformative health journey ? Personalized plans,
            expert guidance and dedicated support await your commitment.
          </p>
          <Button className="bg-white text-slate-800 font-bold hover:bg-slate-300">
            Get free Consultance
          </Button>
        </div>
      </section>
    </main>
  );
};


export default Homepage