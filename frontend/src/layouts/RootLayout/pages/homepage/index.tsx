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
import { BENEFITS, SERVICES } from "@/utils/data";
import { SquareActivity } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

export const Homepage = () => {
  const navigate = useNavigate();

  const prepareCall = async () => {
    navigate("/call");
  };
  return (
    <main className="min-h-screen">
      <section className="min-h-screen flex items-center justify-around">
        <div className="flex flex-col gap-10">
          <div className="max-w-[650px]">
            <h1 className="sm:text-6xl text-5xl font-bold">
              Comprehensive Care For{" "}
              <span className="text-blue-600">Your Mental Well-Being</span>
            </h1>
            <p className="mt-2 font-semibold text-slate-600 md:text-left">
              Transforming the patient experience by embracing innovative
              solutions, ensuring accessibility to care for all, and upholding
              an unwavering commitment to safety and excellence in healthcare
              delivery.
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
        id="benefits-of-therapy"
        className="min-h-screen flex flex-col items-center space-y-5"
      >
        <div className="text-center">
          <h3 className="font-bold">BENEFITS</h3>
          <h1 className="sm:text-5xl font-bold max-w-xl">
            What Are The Potential{" "}
            <span className="text-blue-500">Benefits</span> Of Psychology?
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
          {BENEFITS.map((benefit, index: number) => (
            <Card className="max-w-[400px]" key={index}>
              <CardHeader>
                <CardTitle>
                  <img
                    src="/assets/images/community awareness.png"
                    width="50px"
                    alt="Community Awareness"
                  />
                  <h1>{benefit.title}</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section
        id="our-services"
        className="min-h-screen flex flex-col items-center space-y-5"
      >
        <div className="text-center">
          <h3 className="font-bold">Our Services</h3>
          <h1 className="sm:text-5xl font-bold max-w-xl">What do we Offer ?</h1>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
          {SERVICES.map((service, index: number) => (
            <div className="max-w-[300px]" key={index}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxf8IJIoFbgsiIXTf6lf1foiWvnNV4QdZ85w&s"
                width="100%"
                alt="Community Awareness"
                className="rounded-t-md"
              />
              <div className="p-1">
                <h1 className="font-bold sm:text-xl">{service.title}</h1>
                <p className="text-slate-500">
                  {service.description === "" &&
                    "Transforming the patient experience by embracing innovative solutions, ensuring accessibility to care for all, and upholding an unwavering commitment to safety and excellence in healthcare delivery."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="why-medilink"
        className="min-h-screen flex justify-center items-center space-y-5"
      >
        <div className="space-y-5 max-w-[400px]">
          <h1 className="font-bold sm:text-3xl">Why Choose Us</h1>
          <ul className="space-y-2.5">
            <li>
              <div className="flex items-center">
                <SquareActivity className="bg-blue-500/20 text-blue-500 p-1 rounded-full" />
                <div>
                  <h2 className="font-bold">Personal Marketing</h2>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <SquareActivity className="bg-blue-500/20 text-blue-500 p-1 rounded-full" />
                <div>
                  <h2 className="font-bold">Our Psychologists</h2>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <SquareActivity className="bg-blue-500/20 text-blue-500 p-1 rounded-full" />
                <div>
                  <h2 className="font-bold">Appointments</h2>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <Button onClick={() => navigate("/book-appointment")}>
            Book Appointment
          </Button>
        </div>
        <img
          src="https://www.baptisthealth.com/-/media/images/migrated/blog-images/teaser-images/gettyimages-1015399630-1280x854.jpg?rev=91b0cae27bff4c6787ba72ea7667f4c9"
          width="500px"
        />
      </section>

      <section
        id="why-medilink"
        className="min-h-screen flex flex-col justify-center items-center space-y-5"
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
      <section className="p-5 relative bg-[url('https://www.shutterstock.com/image-photo/blue-helix-human-dna-structure-600nw-1669326868.jpg')] bg-no-repeat bg-fixed bg-cover filter backdrop-contrast-125 flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-85 -z-50"></div>
        <div className="text-center max-w-[800px] space-y-2.5">
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
