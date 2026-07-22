import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    monthlyPrice: 80,
    yearlyPrice: 768, // ~20% off
    highlighted: false,
    features: [
      { text: "AI resume review", included: true },
      { text: "Unlimited job applications", included: true },
      { text: "1-day recruiter response tracking", included: true },
      { text: "Priority job alerts", included: false },
      { text: "1-on-1 career coaching", included: false },
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 150,
    yearlyPrice: 1440,
    highlighted: true,
    features: [
      { text: "AI resume review", included: true },
      { text: "Unlimited job applications", included: true },
      { text: "1-day recruiter response tracking", included: true },
      { text: "Priority job alerts", included: true },
      { text: "1-on-1 career coaching", included: false },
    ],
  },
  {
    name: "Advanced",
    monthlyPrice: 180,
    yearlyPrice: 1728,
    highlighted: false,
    features: [
      { text: "AI resume review", included: true },
      { text: "Unlimited job applications", included: true },
      { text: "1-day recruiter response tracking", included: true },
      { text: "Priority job alerts", included: true },
      { text: "1-on-1 career coaching", included: true },
    ],
  },
];

export default function PricingSection() {
  const [billedYearly, setBilledYearly] = useState(false);

  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-gray-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Our pricing is simple with no hidden fees
        </h2>
        <p className="text-gray-500 text-sm mt-3">
          7 days free trial on CareerTrack Lite. No credit card required.
        </p>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span
            className={`text-sm font-semibold ${
              !billedYearly ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Bill Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={billedYearly}
            aria-label="Toggle billing period"
            onClick={() => setBilledYearly((v) => !v)}
            className="relative w-11 h-6 rounded-full bg-indigo-600 transition-colors duration-200"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                billedYearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-semibold ${
              billedYearly ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Bill Yearly
          </span>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-start">
          {plans.map((plan) => {
            const price = billedYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = billedYearly ? "Per Year" : "Per Month";

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col ${
                  plan.highlighted
                    ? "bg-indigo-600 shadow-lg md:-translate-y-2"
                    : "bg-white shadow-sm"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        plan.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm mt-1 ${
                        plan.highlighted ? "text-indigo-200" : "text-gray-400"
                      }`}
                    >
                      {period}
                    </p>
                  </div>
                  <div
                    className={`rounded-lg px-3 py-1.5 font-bold text-lg ${
                      plan.highlighted
                        ? "bg-white text-indigo-600"
                        : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    ${price}
                  </div>
                </div>

                <hr
                  className={`my-5 ${
                    plan.highlighted ? "border-indigo-400/50" : "border-gray-100"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-2 text-sm ${
                        feature.included
                          ? plan.highlighted
                            ? "text-white"
                            : "text-gray-700"
                          : plan.highlighted
                          ? "text-indigo-300"
                          : "text-gray-300"
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center w-4 h-4 rounded-full shrink-0 ${
                          feature.included
                            ? plan.highlighted
                              ? "bg-white text-indigo-600"
                              : "bg-indigo-600 text-white"
                            : plan.highlighted
                            ? "bg-indigo-400/40 text-indigo-200"
                            : "bg-gray-100 text-gray-300"
                        }`}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  className={`mt-6 w-full py-2.5 rounded-full font-semibold text-sm transition-colors duration-200 ${
                    plan.highlighted
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  Purchase Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}