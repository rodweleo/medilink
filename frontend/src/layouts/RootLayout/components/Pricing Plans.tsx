import { PlanCard } from "@/ui/cards/PlanCard"
import { Plan } from "@/utils/types"

export const PricingPlans = () => {
    const plans: Plan[] = [
        {
            title: "Basic",
            description: "Ideal for individuals seeking convenient access to basic healthcare services.",
            features: [
                "Virtual Consultations",
                "AI Symptom Checker",
                "Secure Messaging",
                "Medical Records Access",
                "24/7 Support"
            ],
            pricing: "KES 3000/month"
        },
        {
            title: "Standard",
            description: "Perfect for individuals and families looking for comprehensive telehealth services with additional conveniences.",
            features: [
                "All Basic Plan Features",
                "Prescription Refills",
                "Appointment Reminders",
                "Tele-monitoring",
                "Health Trends Analysis",
                "Priority Support"
            ],
            pricing: "KES 5000/month"
        },
        {
            title: "Premium",
            description: "Designed for individuals and families seeking premium telehealth services with enhanced features and personalized support",
            features: [
                "All Standard Plan features",
                "Specialist Consultations",
                "Health Coaching",
                "Family Accounts",
                "Annual Health Check-up",
                "Exclusive Discounts"
            ],
            pricing: "KES 10,000/month"
        }
    ]
    return <section className="flex flex-col gap-5">
        <h1 className="font-bold text-xl text-blue-500 text-center">Choose the plan that fits you best:</h1>
        <section className="flex flex-wrap w-full justify-center gap-10">
            {plans.map((plan) => {
                return <PlanCard key={plan.title} plan={plan}/>
            })}
    </section>
    </section>
}
