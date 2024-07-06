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


export const SupportGroups = () => {

  const { toast } = useToast()
  const joinSupportGroup = () => {

    toast({
      variant: "destructive",
      title: `Uh oh! Something went wrong.`,
      description: 'This feature is currently offline. The system administrator is working on restoring it. Thank you for your patience.'
    })
  }
  return (
    <main className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Support Groups</h1>
      <p>
        Welcome to our Support Groups hub, where you'll find a diverse array of
        communities designed to foster connection, understanding, and
        empowerment. In our commitment to holistic healthcare, we recognize the
        profound impact of peer support in navigating health challenges. <br />
        Whether you're seeking guidance on managing chronic conditions, support
        for mental health journeys, or simply a space to share experiences and
        insights, our support groups offer a safe and welcoming environment for
        individuals to come together, learn from one another, and embark on
        their paths towards wellness. <br />
        Explore our range of groups, each tailored to address unique needs, and
        discover the strength that comes from solidarity and shared experiences.
        Join us as we journey together towards improved health and well-being.
      </p>
      <section className="flex flex-wrap gap-5">
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
      </section>
    </main>
  );
};
