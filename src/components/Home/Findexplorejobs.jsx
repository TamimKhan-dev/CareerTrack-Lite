import { Code2, Search, User, Pencil, ClipboardList, Briefcase } from "lucide-react";

const jobCategories = [
  {
    icon: Code2,
    title: "Software Engineer Jobs",
    description:
      "Explore thousands of software engineering roles to power your career forward.",
  },
  {
    icon: Search,
    title: "Growth Marketing Jobs",
    description:
      "Explore the latest jobs in growth marketing from this up and coming job board.",
  },
  {
    icon: User,
    title: "Customer Success Jobs",
    description:
      "Find your next opportunity in customer success and build lasting relationships.",
  },
  {
    icon: Pencil,
    title: "Graphic Designer Jobs",
    description:
      "Discover graphic design roles that let your creativity shine and reach new heights.",
  },
  {
    icon: ClipboardList,
    title: "Project Manager Jobs",
    description:
      "Lead projects to success with a variety of roles tailored for driven project managers.",
  },
  {
    icon: Briefcase,
    title: "Product Manager Jobs",
    description:
      "Shape the future of products with thousands of openings in product management.",
  },
];

export default function FindExploreJobs() {
  return (
    <section className="bg-[#2A21C2] py-8 px-4 my-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight">
          Find &amp; Explore Jobs
        </h2>
        <p className="text-white/90 text-lg mt-3">
          Find your dream role with over 3 million jobs
        </p>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {jobCategories.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Icon className="w-7 h-7 text-indigo-600 mb-4" strokeWidth={2.2} />
              <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          className="mt-10 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors duration-200"
        >
          Explore Jobs
        </button>
      </div>
    </section>
  );
}