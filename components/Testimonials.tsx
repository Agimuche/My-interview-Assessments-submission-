const testimonials = [
  {
    name: "Anna Vidal",
    role: "Business Analyst",
    text: "Tobams Group truly transformed our workplace. They understood our vision and implemented a digital strategy that delivered real results. Highly recommend their Website Design service.",
    initials: "AV",
    color: "bg-[#c8102e]",
  },
  {
    name: "Britta Olsson",
    role: "Marketing Director",
    text: "Their training programmes gave us the tools to thrive in an increasingly competitive market. The team is professional, knowledgeable, and genuinely passionate. A pleasure working with them.",
    initials: "BO",
    color: "bg-[#1a0a2e]",
  },
  {
    name: "Chioma Nwachukwu",
    role: "HR Manager",
    text: "Tobams Group has transformed our team with their outstanding company training. From Sales Training to customised programmes, they've elevated our performance with top-notch professionalism and flair.",
    initials: "CN",
    color: "bg-[#6b21a8]",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white py-16 md:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-[#1a0a2e] text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-center mb-12"
        >
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f9f5ff] rounded-xl p-6 flex flex-col gap-4 border border-[#ede9fe]"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#1a0a2e] text-[14px] font-bold">{t.name}</p>
                  <p className="text-gray-500 text-[12px]">{t.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-0.5" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-[13px] leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
