import Image from "next/image";
import Link from "next/link";

interface FeatureSectionProps {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
  bgColor?: string;
  showLearnMore?: boolean;
}

export default function FeatureSection({
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imageLeft = false,
  bgColor = "bg-white",
  showLearnMore = true,
}: FeatureSectionProps) {
  const textContent = (
    <div className="flex flex-col justify-center">
      <h2 className="text-[#1a0a2e] text-[26px] sm:text-[30px] lg:text-[32px] font-bold leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed mb-5">
          {description}
        </p>
      )}
      {bullets.length > 0 && (
        <ul className="space-y-2 mb-6" aria-label={`${title} features`}>
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-[14px]">
              <span
                className="mt-1.5 w-2 h-2 rounded-full bg-[#c8102e] flex-shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      )}
      {showLearnMore && (
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-[#c8102e] text-sm font-semibold hover:gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-1 rounded w-fit"
        >
          Learn More
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );

  const imageContent = (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );

  return (
    <section className={`${bgColor} py-16 md:py-20`} aria-labelledby={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {imageLeft ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
