import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Assessment, AssessmentsGroupedByCategory } from "@/utils/types";

const ASSESSMENTS: Assessment[] = [
  {
    id: 1,
    title: "Depression Assessment",
    description:
      "Assess your mood, interest in activities, sleep patterns, and more.",
    category: "Mental Health",
  },
  {
    id: 2,
    title: "Anxiety Assessment",
    description:
      "Evaluate worry, restlessness, concentration difficulties, and physical symptoms.",
    category: "Mental Health",
  },
  {
    id: 3,
    title: "PTSD Assessment",
    description:
      "Screen for symptoms related to traumatic events, re-experiencing, avoidance, and hyperarousal.",
    category: "Mental Health",
  },
  {
    id: 4,
    title: "Bipolar Disorder Assessment",
    description:
      "Assess mood swings, periods of elevated mood, depressive episodes, and impulsivity.",
    category: "Mental Health",
  },
  {
    id: 5,
    title: "Obsessive-Compulsive Disorder (OCD) Assessment",
    description:
      "Evaluate obsessions, compulsions, and their impact on daily life.",
    category: "Behavioral Health",
  },
  {
    id: 6,
    title: "ADHD Assessment",
    description:
      "Screen for symptoms of inattention, hyperactivity, and impulsivity.",
    category: "Behavioral Health",
  },
  {
    id: 7,
    title: "Eating Disorders Assessment",
    description:
      "Assess attitudes towards food, body image concerns, and eating behaviors.",
    category: "Eating Disorders",
  },
  {
    id: 8,
    title: "Substance Use Assessment",
    description:
      "Evaluate substance use patterns, cravings, withdrawal symptoms, and negative consequences.",
    category: "Substance Use Disorders",
  },
];

const groupedAssessments: AssessmentsGroupedByCategory = ASSESSMENTS.reduce(
  (group: AssessmentsGroupedByCategory, assessment: Assessment) => {
    const { category } = assessment;

    if (!group[category]) {
      group[category] = [];
    }

    group[category].push(assessment);

    return group;
  },
  {},
);

export const Assessments = () => {
  const navigate = useNavigate();
  return (
    <main>
      <h1 className="font-bold text-3xl">Assessments</h1>
      <section className="flex flex-col gap-10 mt-5">
        {Object.entries(groupedAssessments).map((assessmentGroup) => {
          return (
            <section
              className="flex flex-col gap-3 w-full"
              key={assessmentGroup[0]}
            >
              <h1 className="font-semibold text-xl">{assessmentGroup[0]}</h1>
              <ul className="flex flex-wrap gap-5">
                {assessmentGroup[1].map((assessment: Assessment) => {
                  return (
                    <li key={assessment.id}>
                      <Card
                        className="max-w-[400px]"
                        id={assessment.id.toString()}
                      >
                        <CardHeader>
                          <CardTitle>{assessment.title}</CardTitle>
                          <CardDescription>
                            {assessment.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button
                            onClick={() =>
                              navigate(
                                assessment.title
                                  .toLowerCase()
                                  .replace(" ", "-"),
                              )
                            }
                            disabled={
                              assessment.title !== "Depression Assessment"
                            }
                          >
                            Take assessment
                          </Button>
                        </CardFooter>
                      </Card>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </section>
    </main>
  );
};
