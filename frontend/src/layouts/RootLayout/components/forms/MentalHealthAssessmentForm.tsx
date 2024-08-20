import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PHQ9_QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way",
];

const DEPRESSION_SEVERITY_SCALE = [
  {
    value: "0-4",
    severity: "No depression",
  },
  {
    value: "5-9",
    severity: "Mild depression",
  },
  {
    value: "10-14",
    severity: "Moderate depression",
  },
  {
    value: "15-19",
    severity: "Moderately severe depression",
  },
  {
    value: "20-27",
    severity: "Severe depression",
  },
];

const PHQ9_ANSWERS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

const formSchema = z.object(
  Object.fromEntries(
    PHQ9_QUESTIONS.map((question) => [
      question.toLowerCase(),
      z.enum(["0", "1", "2", "3"]),
    ])
  )
);

const MentalHealthAssessmentForm = () => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const [result, setResult] = useState<number>(0);
  const [aiSuggestion, setAISuggestion] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = Object.values(values)
      .map((value) => Number(value))
      .reduce((sum, value) => {
        return sum + value;
      }, 0);
    setResult(Number(result));

    if(result <= 4){
      console.log("No depression")
    }else if(result > 4 && result <= 9){
      const prompt: string = `
        I have been feeling mild depressed lately. 
        These feelings have been going on within the last two weeks. 
        Can you provide some coping strategies.`
      
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setAISuggestion(text)

    }else if(result > 9 && result <= 14){
      console.log(`
        I have been feeling moderately depressed lately. 
        These feelings have been going on within the last two weeks. 
        Can you provide some coping strategies.`)
    }else if(result > 19 && result <= 27){
      console.log(`
        I have been feeling severely depressed lately. 
        These feelings have been going on within the last two weeks. 
        Can you provide some coping strategies.`)
    }
  }
  

  return (
    <main className="w-full px-5 py-10 flex flex-col gap-4">
      <article className="flex flex-col gap-2">
        <h1 className="font-bold sm:text-4xl text-3xl">Patient Health Questionnaire 9</h1>
        <p>
          This is a self-administered patient questionnaire for common mental
          disorders validated for use in primary care.
        </p>
        <>
          <h2 className="font-semibold">Uses of the Questionnaire</h2>
          <ul className="list-decimal ml-5">
            <li>
              Monitor the severity of depression and response to treatment.
            </li>
            <li>
              Make a tentative diagnosis of depression in at-risk populations -
              e.g. those with coronary heart diesease or after stroke.
            </li>
          </ul>
        </>
      </article>
      <section className="flex flex-col gap-5 w-fit">
        <Card className="max-w-[700px]">
          <CardHeader>
            <CardTitle>Patient Health Questionnaire</CardTitle>
            <CardDescription>
              Over the last two weeks, how often have you been bothered by any
              of the following problems?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8">
                {PHQ9_QUESTIONS.map((question, index: number) => {
                  return (
                    <FormField
                      control={form.control}
                      name={question.toLowerCase()}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {index + 1}. {question}
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}>
                              {PHQ9_ANSWERS.map((answer, index: number) => {
                                return (
                                  <div
                                    className="flex items-center space-x-2"
                                    key={index}>
                                    <RadioGroupItem
                                      value={answer.value.toString()}
                                      id="r1"
                                    />
                                    <Label htmlFor="r1">{answer.label}</Label>
                                  </div>
                                );
                              })}
                            </RadioGroup>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                })}

                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-4">
            <div>
              <h2 className="font-bold text-xl">
                Result: <span>{result} / 27</span>
              </h2>
              <p className="font-semibold">
                Please ensure all questions above are answered.
              </p>
            </div>
            {aiSuggestion && <section className="bg-black p-2.5 rounded-md space-y-2 w-full" >
              <h2 className="text-2xl font-bold text-white">AI Suggestion</h2>
              <p className="text-slate-100">{aiSuggestion}</p>
            </section>
            
            }
            
          </CardFooter>
        </Card>

        <Card className="max-w-[400px]">
          <CardHeader>
            <CardTitle>Depression severity scale:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="rounded-lg bg-gradient-to-b from-green-500 via-orange-500 to-red-500 divide-y divide-white">
              {DEPRESSION_SEVERITY_SCALE.map((value) => {
                return (
                  <li className="p-5 font-semibold text-white">
                    <span>{value.value}</span>: {value.severity}
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default MentalHealthAssessmentForm
