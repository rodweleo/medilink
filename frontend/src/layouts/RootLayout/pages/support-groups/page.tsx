import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { SupportGroupProps } from "@/utils/types";

const SUPPORT_GROUPS: SupportGroupProps[] = [
  {
    name: "Mental Health Support Groups",
    description: `Mental health support groups can offer peer support, coping
        strategies, and a sense of community. 
        MediLink provides anonymity and convenience, encouraging more people
        to seek help.`,
  },
  {
    name: "Substance Abuse and Addiction Recovery Groups",
    description:
      "These groups help individuals in recovery by offering a supportive environment to discuss challenges and successes. The regular meetings and accountability are crucial components of recovery programs.",
  },
  {
    name: "Parental Support Groups",
    description:
      "Parenting can be challenging, and support groups offer advice, shared experiences, and emotional support. They can be particularly helpful for parents navigating unique challenges.",
  },
  {
    name: "Grief and Loss Support Groups",
    description:
      "These groups help individuals process grief and loss, providing a supportive community where members can share their feelings and experiences.",
  },
  {
    name: "Caregiver Support Groups",
    description:
      "Caregivers often experience high levels of stress and burnout. Support groups provide emotional support, practical advice, and resources for managing caregiving responsibilities.",
  },
];


const SupportGroups = () => {

  const { toast } = useToast()
  const joinSupportGroup = () => {

    toast({
      variant: "destructive",
      title: `Uh oh! Something went wrong.`,
      description: 'This feature is currently offline. The system administrator is working on restoring it. Thank you for your patience.'
    })
  }
  return (
    <main className="flex flex-col w-full">
      <article className="flex flex-col items-center space-y-5">
        <section id="#" className="p-5 min-h-screen w-full flex flex-col justify-center space-y-5 items-center bg-[url('https://media.istockphoto.com/id/625736338/photo/stack-of-hands-showing-unity.jpg?s=612x612&w=0&k=20&c=20mAQjGRQ5XVKqHe2qFguqGZ4dwto6lxxinciCfnVI0=')] bg-no-repeat bg-center bg-cover filter backdrop-contrast-125">
          <div className="absolute inset-0 bg-black opacity-60 -z-50"></div>
          <div className="space-y-2.5 text-center flex flex-col items-center">
              <h1 className="font-bold sm:text-7xl text-4xl text-white">MediLink Support Groups Hub</h1>
              <p className="text-slate-200 sm:text-xl max-w-xl">You'll find a diverse array of
              communities designed to foster connection, understanding, and
              empowerment.</p>
            </div>
        </section>
        <section className="flex flex-wrap items-center justify-center py-10 px-5 bg-slate-200 w-full gap-20 ">
          <p className="max-w-3xl sm:text-xl text-2xl leading-relaxed">
            In our commitment to holistic healthcare, we recognize the
            profound impact of peer support in navigating health challenges.
            Whether you're seeking guidance on managing chronic conditions, support
            for mental health journeys, or simply a space to share experiences and
            insights, our support groups offer a safe and welcoming environment for
            individuals to come together, learn from one another, and embark on
            their paths towards wellness. 
          </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbjoiwH56HHzJDlPtXbhegszgWii9P3xycTj-Z7-SnjK9YNaJAXrd3JZbiFDx-GS5h-E&usqp=CAU" alt="Support Group"  className="rounded-xl max-w:w-full"/>
        </section>
      </article>
      <section className="space-y-5 flex flex-col items-center py-10">
        <header className="text-center space-y-1">
          <h2 className="sm:text-4xl text-3xl font-bold">Explore our range of groups</h2>
          <p className="text-slate-500">
            Join us as we journey together towards improved health and well-being.
          </p>
        </header>
        <div className="flex flex-wrap gap-5 justify-center px-5">
          {SUPPORT_GROUPS.map((group) => (
            <Card className="max-w-[400px] cursor-pointer shadow-lg hover:bg-slate-100 transition-all duration-300 hover:scale-[1.025]">
              {" "}
              <CardHeader>
                <CardTitle>{group.name}</CardTitle>
              </CardHeader>
              <CardContent>{group.description}</CardContent>
              <CardFooter className="flex items-center justify-center gap-5">
                <Button variant="outline" className="w-full">
                  Details
                </Button>
                <Button variant="default" disabled={!group.name.includes("Mental Health Support Groups")} className="w-full" onClick={() => joinSupportGroup()}>
                  Join Group
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};


export default SupportGroups