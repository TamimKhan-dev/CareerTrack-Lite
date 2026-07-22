import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "What is CareerTrack Lite?",
    answer:
      "CareerTrack Lite is a job search platform that helps you discover, track, and apply to roles across software engineering, marketing, design, product, and more — all in one place, with tools like AI resume review and application tracking to keep your search organized.",
  },
  {
    question: "Is CareerTrack Lite free to use?",
    answer:
      "You can explore jobs and create a profile for free. Paid plans unlock extra features like unlimited applications, priority job alerts, and 1-on-1 career coaching, and every plan starts with a 7-day free trial — no credit card required.",
  },
  {
    question: "How does the AI resume review work?",
    answer:
      "Upload your resume and our AI reviews it against the role you're applying for, flagging missing keywords, formatting issues, and areas to strengthen — so you can submit a stronger application in minutes.",
  },
  {
    question: "Can I track the status of my job applications?",
    answer:
      "Yes. Every application you submit through CareerTrack Lite is logged automatically, so you can see what stage each one is in — applied, under review, interview, or closed — without digging through your email.",
  },
  {
    question: "What's the difference between the Basic, Pro, and Advanced plans?",
    answer:
      "Basic covers the essentials like AI resume review and unlimited applications. Pro adds priority job alerts so you hear about new roles first. Advanced includes everything plus 1-on-1 career coaching for personalized guidance on your search.",
  },
  {
    question: "Can I switch between monthly and yearly billing?",
    answer:
      "Yes, you can toggle between monthly and yearly billing at any time from your account settings. Yearly billing is discounted compared to paying month to month.",
  },
  {
    question: "How often are new jobs added to the platform?",
    answer:
      "New listings are added daily across all categories, and Pro and Advanced members get priority alerts as soon as roles matching their profile go live.",
  },
];

export default function Faq() {
  return (
    <section>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div
          className="flex justify-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
          <h2 className="text-5xl font-medium text-center max-w-lg">
            Got questions? We’ve got answers ready
          </h2>
        </div>

        <div>
          <Accordion className="w-full flex flex-col gap-6">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-open:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500"
                )}>
                <AccordionTrigger
                  className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                  {faq.question}
                  <PlusIcon
                    className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
