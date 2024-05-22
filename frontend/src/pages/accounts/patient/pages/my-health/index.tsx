import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const MyHealth = () => {
  return (
    <main>
      Welcome back, John Doe
      <section>
        <p className="flex items-center justify-between">
          <h1 className="font-bold">Upcoming Appointments</h1>
          <Button className="p-0 bg-white text-blue-500 font-bold hover:bg-white">
            View All
          </Button>
        </p>
        <div>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};
