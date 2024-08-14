import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EXPERTS, ISSUES, SERVICES, TESTIMONIALS } from "@/utils/data";
import { BriefcaseBusiness } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { Badge } from "@/components/ui/badge"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdArrowForwardIos } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export const Homepage = () => {
  const navigate = useNavigate();

  const prepareCall = async () => {
    navigate("/call");
  };

  return (
    <main className="min-h-screen">
      <section id="#" className="min-h-screen flex items-center justify-around">
        <div className="flex flex-col gap-10">
          <div className="max-w-[700px]">
            <h1 className="sm:text-7xl text-5xl font-bold">
              Elevating <span className="text-blue-600">emotional </span>
              wellness and <span className="text-blue-600">strong </span> bonds
              for all
            </h1>
            <p className="mt-2 font-semibold text-slate-600 md:text-left">
              Discover the power of personalized therapy with MediLink, your
              only online personalized therapy aligned with your holistic,
              empathetic and Godly beliefs & other things to do.
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-5 ">
            <li>
              <Button
                onClick={() =>
                  navigate("/book-appointment", {
                    replace: true,
                  })
                }
                className="w-fit"
              >
                Book Appointment
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="flex gap-1 hover:gap-2 transition-all duration-200"
                onClick={() => prepareCall()}
              >
                <span>Hoop on a call</span> <IoIosArrowForward />
              </Button>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="fixed bg-white left-0 filter blur-md" />
          <img
            src="/assets/images/hero-bg.jpg"
            width="586px"
            alt="Doctor & patient holding hands."
          />
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
          ))}
        </div>
      </section>
      <section
        id="why-medilink"
        className=" flex justify-center items-center space-y-5 gap-10 py-20"
      >
        <div className="space-y-5 max-w-[500px]">
          <h1 className="font-bold sm:text-5xl text-3xl">
            We care for you, we write for You
          </h1>
          <p className="text-slate-500">
            MedLink is an ever growing community working towards changing the
            way individuals think & act about problems related to Mental Health
            managed by the Current Generation
          </p>
          <ul className="space-y-2.5">
            <li>
              <div className="bg-slate-200 p-5 border-2 border-slate-800 rounded-md">
                <div className="flex gap-2.5">
                  <GrMoney size={35} />
                  <div>
                    <h2 className="font-bold text-2xl">Affordable Sessions</h2>
                    <p className="text-slate-500">
                      MediLink clients who use their insurance save an average
                      of 77% on the cost of therapy.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-slate-200 p-5 border-2 border-slate-800 rounded-md">
                <div className="flex gap-2.5">
                  <IoSearch size={35} />
                  <div>
                    <h2 className="font-bold text-2xl">
                      Simple Search Process
                    </h2>
                    <p className="text-slate-500">
                      MediLink clients who use their insurance save an average
                      of 77% on the cost of therapy.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-slate-200 p-5 border-2 border-slate-800 rounded-md">
                <div className="flex gap-2.5">
                  <GrMoney size={35} />
                  <div>
                    <h2 className="font-bold text-2xl">High Quality Care</h2>
                    <p className="text-slate-500">
                      MediLink clients who use their insurance save an average
                      of 77% on the cost of therapy.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <Button onClick={() => navigate("/book-appointment")}>
            Book Appointment
          </Button>
        </div>
        <div>
          <img
            src="https://www.baptisthealth.com/-/media/images/migrated/blog-images/teaser-images/gettyimages-1015399630-1280x854.jpg?rev=91b0cae27bff4c6787ba72ea7667f4c9"
            alt="A therapist taking notes as a man speaks."
            width="868px"
            className="rounded-md hidden sm:block"
          />
        </div>
      </section>

      <section
        id="why-medilink"
        className="min-h-screen bg-slate-100 flex flex-col items-center space-y-5 p-5"
      >
        <div className="bg-slate-800 h-fit w-full p-10 flex flex-col items-center space-y-5">
          <h1 className="text-white sm:text-4xl text-xl font-bold max-w-xl text-center">
            Find Providers to help you with the following issues
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center w-fit gap-10">
            {ISSUES.map((issue, index: number) => (
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
                  <a href="#" className="font-bold">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 py-10">
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
          <article className="grid sm:grid-cols-2 grid-cols-1 place-items-center">
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
            <img
              src="/assets/images/Feeling Goodjfif.jfif"
              alt="Feeling Good"
              width="500px"
              className="h-full object-fit rounded-xl"
            />
          </article>
        </div>
      </section>

      <section
        id="why-medilink"
        className="flex flex-col justify-center items-center space-y-5 py-20"
      >
        <h1 className="font-bold sm:text-3xl">What we've done so Far</h1>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <Card className="w-[250px] max-w-[250px]">
            <CardHeader>
              <CardTitle>
                <BriefcaseBusiness />
                20+
              </CardTitle>
              <CardDescription>Years of Experience</CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[250px] max-w-[250px]">
            <CardHeader>
              <CardTitle>
                <BriefcaseBusiness />
                100K+
              </CardTitle>
              <CardDescription>Lives Improved</CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[250px] max-w-[250px]">
            <CardHeader>
              <CardTitle>
                <BriefcaseBusiness />
                500+
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
        <article className="flex gap-10">
          {EXPERTS.map((expert, index: number) => (
            <div
              className="border rounded-md p-3 space-y-2.5 shadow-md max-w-[350px] flex flex-col items-center justify-between hover:scale-[1.0075] duration-300 transition-transform"
              key={index}
            >
              <img
                src={expert.image_url}
                alt={expert.name}
                className="rounded-md "
              />
              <div className="space-y-5 items-start w-full">
                <div className="flex justify-between">
                  <h2 className="font-bold text-xl">{expert.name}</h2>
                  <Badge className="bg-blue-500 hover:bg-blue-600">
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
          ))}
        </article>
      </section>

      <section
        id="testimonials"
        className="space-y-5 py-20 grid place-items-center"
      >
        <header>
          <h1 className="font-bold sm:text-4xl text-2xl ">
            Hear is what our Customers Say
          </h1>
        </header>
        <article className="grid sm:grid-cols-2 gap-10 grid-cols-1 place-items-center">
          {
            TESTIMONIALS.map((testimonial, index:number) => (
              <div className="h-fit bg-slate-100 max-w-[400px] border rounded-xl" key={testimonial.customer_name}>
            <p className="p-5 h-[200px]">
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
                <li><h2 className="text-white font-bold text-xl">{testimonial.customer_name}</h2></li>
                <li><p className="text-slate-200 font-medium text-md ">{testimonial.occupancy}</p></li>
              </ul>
            </div>
          </div>
            ))
          }
        </article>
      </section>

      <section className="p-10 relative bg-[url('https://www.shutterstock.com/image-photo/blue-helix-human-dna-structure-600nw-1669326868.jpg')] bg-no-repeat bg-fixed bg-cover filter backdrop-contrast-125 flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-50 -z-50"></div>
        <div className="text-center max-w-[800px] space-y-10">
          <h1 className="text-white text-xl sm:text-5xl font-bold">
            Ready to Begin Your Therapy Journey
          </h1>
          <p className="text-slate-200">
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
