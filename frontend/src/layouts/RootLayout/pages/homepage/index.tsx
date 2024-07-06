import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


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
            <div className="max-w-[500px]">
              <h1 className="text-5xl md:text-6xl font-bold md:text-left">
                ReImagining <span className="text-blue-600">Quality</span> Health
                Care Delivery
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
          <img
            src="https://www.istudiotech.in/wp-content/uploads/2022/03/Healthcare-Powered-by-Automation.png"
            alt="Re-imagining health care through technology."
            className="hidden lg:flex"
          />
        </section> 
        <section className="min-h-screen flex flex-col items-center space-y-5">
              <h1 className="font-bold text-3xl flex flex-col items-center gap-1">Our Key Features <hr className="w-28 bg-blue-500 h-1"/></h1>
              <div className="flex flex-wrap gap-5">
                <Card className="max-w-[300px]">
                  <CardHeader>
                    <CardTitle ><img src="/assets/images/community awareness.png" width="50px" alt="Community Awareness"/><h1>Community Awareness Programs</h1></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                    Join our Community Awareness Programs to engage and empower local communities through education on health, safety, environmental sustainability, and social justice, fostering informed decisions and meaningful actions.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 flex items-center gap-1 hover:gap-2 transition-all duration-300 hover:text-blue-500"><span>Learn More</span> <IoIosArrowForward /></Button>
                  </CardFooter>
                </Card>

                <Card className="max-w-[300px] h-fit">
                  <CardHeader>
                    <CardTitle><img src="/assets/images/health-care.png" width="50px" alt="Health recommendation"/> Health care Recommendation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Experience a smarter, more personalized approach to your health with our cutting-edge recommendations.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 flex items-center gap-1 hover:gap-2 transition-all duration-300 hover:text-blue-500"><span>Learn More</span> <IoIosArrowForward /></Button>
                  </CardFooter>
                </Card>
              </div>
        </section>  
      </article> 
    </main>
  );
};
