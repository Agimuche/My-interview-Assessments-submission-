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
  imageStyle?: React.CSSProperties;
  sectionStyle?: React.CSSProperties;
  textContentStyle?: React.CSSProperties;
  learnMoreStyle?: React.CSSProperties;
  gridGap?: string;
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
  imageStyle,
  sectionStyle,
  textContentStyle,
  learnMoreStyle,
  gridGap = "80px",
}: FeatureSectionProps) {
  const textContent = (
    <div className="flex flex-col justify-center" style={textContentStyle}>
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
          className="inline-flex items-center justify-center text-[#c8102e] text-sm font-semibold hover:opacity-80 transition-all focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-1 rounded"
          style={learnMoreStyle}
        >
          Learn More
          <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      )}
    </div>
  );

  const imageContent = (
    <div className="flex items-center justify-center">
      <div
        className="relative overflow-hidden shadow-lg"
        style={imageStyle ?? { width: "100%", maxWidth: "480px", aspectRatio: "4/3", borderRadius: "12px" }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
      </div>
    </div>
  );

  return (
    <section 
      className={`${bgColor} flex justify-center w-full`} 
      style={sectionStyle}
      aria-labelledby={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="w-full max-w-[1440px] px-4 sm:px-[64px] py-12 md:py-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center" style={{ gap: gridGap }}>
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
