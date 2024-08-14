import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BENEFITS } from "@/utils/data"

const BenefitsOfTherapy = () => {
    return <section
    id="benefits-of-therapy"
    className="min-h-screen flex flex-col items-center space-y-5 py-10"
  >
    <div className="text-center">
      <h1 className="sm:text-5xl font-bold max-w-xl">
        What Are The Potential{" "}
        <span className="text-blue-500">Benefits</span> Of Therapy?
      </h1>
    </div>
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
      {BENEFITS.map((benefit, index: number) => (
        <Card className="max-w-[400px]" key={index}>
          <CardHeader>
            <CardTitle>
              <img
                src="/assets/images/community awareness.png"
                width="50px"
                alt="Community Awareness"
              />
              <h1>{benefit.title}</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500">{benefit.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
}

export default BenefitsOfTherapy