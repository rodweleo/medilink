import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <main className="min-h-screen flex flex-col">
      <center className="flex flex-col gap-4 items-center">
        <img
          src="/assets/images/Doctor Questioning.jpg"
          className="w-[400px]"
          alt="A therapist listening to a patient patiently."
        />
        <>
          <h1 className="font-bold text-5xl">404 Error</h1>
          <h2 className="font-semibold text-2xl">
            Ooops! The page{" "}
            <span className="text-blue-500 underline">{location.pathname}</span>{" "}
            is not around
          </h2>
        </>
        <>
          <p className="text-slate-500 font-medium">
            We tried but we couln't find the page you're looking for.
          </p>
          <p className="text-slate-500 font-medium">
            We'll do better next time.
          </p>
          <p className="text-slate-500 font-medium">
            We want to help you the best way we can. You're invited to our
            homepage.
          </p>
        </>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </center>
    </main>
  );
};

export default NotFound;
