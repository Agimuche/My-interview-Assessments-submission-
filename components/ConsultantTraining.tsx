import Link from "next/link";
import FeatureCard from "./FeatureCard";

const consultantFeatures = [
  {
    icon: "🎓",
    title: "Expert-Led Learning",
    description:
      "Learn from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    icon: "🛠️",
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your analytical skills and strategic thinking.",
  },
  {
    icon: "📋",
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum covers fundamental principles and advanced methodologies, creating a thorough understanding.",
  },
  {
    icon: "🌍",
    title: "Global Recognition",
    description:
      "Earn globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function ConsultantTraining() {
  return (
    <section
      className="bg-[#f9f5ff] py-16 md:py-20"
      aria-labelledby="consultant-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h2
            id="consultant-heading"
            className="text-[#1a0a2e] text-[26px] sm:text-[30px] lg:text-[32px] font-bold leading-tight mb-3"
          >
            Training The Consultant
          </h2>
          <p className="text-[#c8102e] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Maximise Your Potential as a Certified Trainer
          </p>
          <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed max-w-3xl">
            With the help of our Training Consultant program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from experienced consultants in the field in our intensive, practical training environment. Gain in-depth knowledge of our program with ample opportunities to practice, mentor, and develop strategy to mentor others in your chosen subfield.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {consultantFeatures.map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href="#"
            className="inline-flex items-center gap-1 bg-[#c8102e] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#a00d24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2"
          >
            Learn More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
