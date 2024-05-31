import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AboutUsPage = () => {
  return (
    <main className="min-h-screen">
      <section className="h-screen flex items-center flex-col">
        <div className="flex flex-col gap-4 justify-center items-center  bg-gray-50 w-full py-20">
          <p className="text-5xl font-bold">About Us</p>
          <p className="mt-2  text-xl font-semibold text-slate-600">
            Welcome to MediLink - ConnectHealth
          </p>
          <p className="mt-2 font-semibold text-slate-600 w-[700px] text-center">
            At MediLink, we are dedicated to transforming healthcare delivery by
            leveraging technology to bridge the gap in healthcare access,
            especially in regions with limited resources and infrastructure. Our
            mission is to ensure that everyone, regardless of their location,
            has access to quality healthcare services.
          </p>
        </div>
        <div className="grid gap-4 justify-center items-center w-full grid-cols-2 py-20">
          <div className="flex flex-col items-center gap-4">
            <p className="text-5xl font-bold mx-auto">Our Vision</p>
            <p className="mt-2 text-center font-semibold text-slate-600 mx-auto w-[70%]">
              We envision a world where healthcare is accessible to all,
              irrespective of geographical and infrastructural barriers. By
              integrating advanced technological solutions, we aim to create a
              seamless and efficient healthcare system that caters to the needs
              of underserved populations.
            </p>
          </div>
          <div className="h-full bg-gray-300 w-[600px] mx-auto"></div>
        </div>
        <div className="grid gap-4 justify-center items-center w-full grid-cols-2 bg-gray-50 py-20">
          <div className="h-full bg-gray-300 w-[600px] mx-auto"></div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-full bg-gray-300 w-[600px] mx-auto"></div>
            <p className="text-5xl font-bold mx-auto">Our Mission</p>
            <p className="mt-2 text-center font-semibold text-slate-600 mx-auto w-[80%]">
              Our mission is to revolutionize healthcare delivery by providing a
              comprehensive platform that enhances access, efficiency, and
              patient experience. We strive to: Improve access to healthcare
              services through telemedicine. Ensure seamless access to patient
              records with Electronic Health Records (EHR). Facilitate easy
              identification of healthcare facilities with our Healthcare
              Facility Mapping. Streamline appointment scheduling to manage
              patient queues effectively. Provide mobile access and offline
              functionality to cater to users in rural areas with limited or no
              internet connectivity.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-20 items-center">
          <p className="text-5xl font-bold">What We Offer </p>
          <div className="grid grid-cols-3 gap-12">
            <OfferCard
              title="Telemedicine Services"
              description="Enabling remote consultations between patients and healthcare providers, reducing the need for physical visits and making healthcare more accessible."
            />
            <OfferCard
              title="Electronic Health Records (EHR)"
              description="Allowing healthcare providers to
            access patient records seamlessly, ensuring continuity of care
            regardless of location."
            />
            <OfferCard
              title="Healthcare Facility Mapping"
              description="Geographically mapping healthcare
            facilities, enabling users to search for nearby facilities based on
            medical needs, services offered, and available equipment."
            />
            <OfferCard
              title="Appointment Scheduling"
              description="Managing patient queues efficiently,
            reducing wait times, and improving the overall patient experience."
            />
            <OfferCard
              title="Mobile Access and Offline Functionality"
              description="Ensuring users in rural areas can access essential healthcare services even with limited or
            no internet connectivity."
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 py-20 items-center bg-gray-50">
          <p className="text-5xl font-bold">Our Commitment</p>
          <p className="mt-2 text-center font-semibold text-slate-600 mx-auto w-[80%]">
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

function OfferCard({ title, description }) {
  return (
    <Card className="w-[350px]" key={title}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
