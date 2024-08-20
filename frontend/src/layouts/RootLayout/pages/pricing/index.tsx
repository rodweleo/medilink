import { PricingPlans } from "../../components/Pricing Plans";

const Pricing = () => {
  return (
    <main className="flex flex-col gap-5 w-full items-center">
      <div className="text-center">
        <h1 className="font-bold text-2xl">MediLink Packages & Pricing</h1>
        <p className="max:w-[600px] ">
          Whether you're a healthcare provider or a patient seeking convenient
          medical care, we have tailored packages to suit your needs.{" "}
        </p>
      </div>
      <PricingPlans />
    </main>
  );
};

export default Pricing