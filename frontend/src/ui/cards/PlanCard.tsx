import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plan } from "@/utils/types";

export const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <Card
      className={`w-[300px] flex flex-col justify-between ${plan.title === "Standard" && "bg-blue-500 text-white"}`}
    >
      <CardHeader>
        <h2>{plan.title}</h2>
        <CardTitle>{plan.pricing}</CardTitle>
        <CardDescription
          className={`${plan.title === "Standard" && "text-white"}`}
        >
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc ml-5 space-y-2">
          {plan.features.map((feature: string) => {
            return <li key={feature}>{feature}</li>;
          })}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${plan.title === "Standard" && "border border-white text-blue-500 hover:bg-blue-400 hover:text-white transition-all duration-300 bg-white"}`}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

