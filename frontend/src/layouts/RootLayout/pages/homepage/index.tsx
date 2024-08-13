import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BENEFITS } from "@/utils/data";


export const Homepage = () => {
  const navigate = useNavigate();

  const prepareCall = async () => {
    navigate("/call")
  }
  return (
    <main className="min-h-screen">
      <article>
        <section className="min-h-screen flex items-center justify-around">
          <div className="flex flex-col gap-10">
            <div className="max-w-[650px]">
              <h1 className="sm:text-7xl text-5xl font-bold">
                Comprehensive Care For <span className="text-blue-600">Your Mental Well-Being</span>
              </h1>
              <p className="mt-2 font-semibold text-slate-600 md:text-left">
                Transforming the patient experience by embracing innovative
                solutions, ensuring accessibility to care for all, and upholding
                an unwavering commitment to safety and excellence in healthcare
                delivery.
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-5 ">
              <li><Button onClick={() =>
                navigate("/book-appointment", {
                  replace: true,
                })
              }
              className="w-fit">
              Book Appointment
            </Button></li>
              <li><Button variant="link" className="flex gap-1 hover:gap-2 transition-all duration-200" onClick={() => prepareCall()}><span>Hoop on a call</span> <IoIosArrowForward /></Button></li>
            </ul>
          </div>
          <div className="">
            <div className="fixed bg-white left-0 filter blur-md"/>
            <img src="/assets/images/hero-bg.jpg" width="1024px" alt="Doctor & patient holding hands."/>
          </div>
        </section> 
        <section className="min-h-screen flex flex-col items-center space-y-5">
              <div className="text-center">
                <h3 className="font-bold">BENEFITS</h3>
                <h1 className="sm:text-5xl font-bold max-w-xl">What Are The Potential <span className="text-blue-500">Benefits</span> Of Psychology?</h1>
              </div>
              <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
                {
                  BENEFITS.map((benefit, index:number) => (
                    <Card className="max-w-[400px]" key={index}>
                  <CardHeader>
                    <CardTitle ><img src="/assets/images/community awareness.png" width="50px" alt="Community Awareness"/><h1>{benefit.title}</h1></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                    Join our Community Awareness Programs to engage and empower local communities through education on health, safety, environmental sustainability, and social justice, fostering informed decisions and meaningful actions.</p>
                  </CardContent>
                </Card>
                  ))
                }

                
              </div>
        </section>  
      </article> 
    </main>
  );
};
