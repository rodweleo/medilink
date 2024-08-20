import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServiceOffered } from "@/utils/types";
const SERVICE_OFFERS: ServiceOffered[] = [
  {
    title: "Telemedicine Services",
    description:
      "Enabling remote consultations between patients and healthcare providers, reducing the need for physical visits and making healthcare more accessible.",
  },
  {
    title: "Electronic Health Records (EHR)",
    description:
      "Allowing healthcare providers to access patient records seamlessly, ensuring continuity of care regardless of location.",
  },
  {
    title: "Healthcare Facility Mapping",
    description:
      "Geographically mapping healthcare facilities, enabling users to search for nearby facilities based on medical needs, services offered, and available equipment.",
  },
  {
    title: "Appointment Scheduling",
    description:
      "Managing patient queues efficiently, reducing wait times, and improving the overall patient experience.",
  },
  {
    title: "Mobile Access and Offline Functionality",
    description:
      "Ensuring users in rural areas can access essential healthcare services even with limited or no internet connectivity.",
  },
];
const AboutUsPage = () => {
  return (
    <main className="min-h-screen">
      <section className="flex items-center flex-col">
        <div className="flex flex-col gap-4 justify-center items-center bg-gray-100 w-full py-20">
          <p className="text-5xl font-bold text-center">About Us</p>
          <p className="mt-2  text-xl font-semibold text-slate-600 text-center">
            Welcome to MediLink - ConnectHealth
          </p>
          <p className="mt-2 font-semibold text-slate-600 text-center max-w-[600px]">
            At MediLink, we are dedicated to transforming healthcare delivery by
            leveraging technology to bridge the gap in healthcare access,
            especially in regions with limited resources and infrastructure. Our
            mission is to ensure that everyone, regardless of their location,
            has access to quality healthcare services.
          </p>
        </div>
        <div className="sm:flex lg:grid gap-4 justify-center items-center w-full lg:grid-cols-2 py-20">
          <div className="flex flex-col items-center gap-4">
            <p className="text-5xl font-bold mx-auto">Our Vision</p>
            <p className="mt-2 text-left font-semibold text-slate-600 mx-auto w-[70%]">
              We envision a world where healthcare is accessible to all,
              irrespective of geographical and infrastructural barriers. <br />{" "}
              By integrating advanced technological solutions, we aim to create
              a seamless and efficient healthcare system that caters to the
              needs of underserved populations.
            </p>
          </div>
          <div className="h-full w-[600px] mx-auto hidden lg:block">
            <img
              src="https://www.istudiotech.in/wp-content/uploads/2023/02/2-27.png"
              alt="Re-imagining health care through technology."
              className="hidden lg:flex"
            />
          </div>
        </div>
        <div className="sm:flex lg:grid gap-4 justify-center items-center w-full lg:grid-cols-2 bg-gray-100 py-20">
          <div className="h-full w-[600px] mx-auto hidden lg:block">
            <img
              src="https://www.istudiotech.in/wp-content/uploads/2023/02/3-25.png"
              alt="Our Mision"
              className="hidden lg:flex"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-5xl font-bold mx-auto">Our Mission</p>
            <p className="mt-2 text-left font-semibold text-slate-600 mx-auto w-[80%]">
              Our mission is to revolutionize healthcare delivery by providing a
              comprehensive platform that enhances access, efficiency, and
              patient experience. <br /> We strive to:{" "}
              <ul className="list-disc ml-5">
                <li>
                  Improve access to healthcare services through telemedicine.
                </li>
                <li>
                  Ensure seamless access to patient records with Electronic
                  Health Records (EHR).
                </li>
                <li>
                  Facilitate easy identification of healthcare facilities with
                  our Healthcare Facility Mapping.
                </li>
                <li>
                  Streamline appointment scheduling to manage patient queues
                  effectively.
                </li>
                <li>
                  Provide mobile access and offline functionality to cater to
                  users in rural areas with limited or no internet connectivity.
                </li>
              </ul>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-20 items-center">
          <p className="text-5xl font-bold">What We Offer </p>
          <div className="flex flex-wrap justify-center gap-10">
            {SERVICE_OFFERS.map(({ title, description }) => (
              <OfferCard key={title} title={title} description={description} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-20 items-center bg-gray-100 w-full">
          <p className="text-5xl font-bold text-center">Our Commitment</p>
          <p className="mt-2 text-center font-semibold text-slate-600 mx-auto max-w-[700px]">
            We are committed to enhancing healthcare outcomes and patient
            satisfaction by addressing the challenges faced by the healthcare
            sector. Through MediLink, we aim to empower individuals and
            healthcare providers, ensuring equitable access to essential
            healthcare resources. Join us on our journey to revolutionize
            healthcare delivery and make quality healthcare accessible to all.
          </p>
        </div>
      </section>
    </main>
  );
};

function OfferCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card
      className="w-[350px] cursor-pointer shadow-md hover:scale-[1.02] hover:bg-black transition-all duration-300 hover:text-white"
      key={title}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="hover:text-white">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}


export default AboutUsPage