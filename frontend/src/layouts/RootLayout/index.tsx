import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChatWithMeliForm } from "./components/forms/ChatWithMeliForm";
import RootHeader from "@/components/root-header";
import RootFooter from "@/components/root-footer";
import RootRoutes from "@/routes/RootRoutes";


export const RootLayout = () => {
  return (
    <main className="min-h-screen w-full">
      <RootHeader/>
      <section className="min-h-screen">
        <RootRoutes/>
      </section>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center fixed bottom-0 right-0 m-5">
            <ChatBubbleIcon className="animate-pulse text-3xl" />
            <span className="bg-white h-3 w-3 rounded-full animate-ping absolute top-0 left-0"></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[500px] rounded-xl">
          <ChatWithMeliForm />
        </DialogContent>
      </Dialog>
      <RootFooter/>
    </main>
  );
};
