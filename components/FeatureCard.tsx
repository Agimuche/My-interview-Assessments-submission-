interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div
        className="w-10 h-10 bg-[#fce4ec] rounded-lg flex items-center justify-center text-xl"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-[#1a0a2e] text-[16px] font-bold leading-snug">{title}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed">{description}</p>
    </div>
  );
}
