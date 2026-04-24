import Hero from "@/components/Hero";
import LMSSection from "@/components/LMSSection";
import TrainingServices from "@/components/TrainingServices";
import ManagementDevelopment from "@/components/ManagementDevelopment";
import TransformationHub from "@/components/TransformationHub";
import ConsultantTraining from "@/components/ConsultantTraining";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-6 lg:h-12 bg-white" />
      <LMSSection />
      <div className="h-6 lg:h-12 bg-white" />
      <TrainingServices />
      <ManagementDevelopment />
      <TransformationHub />
      <div className="h-6 lg:h-12 bg-[#F8F9FA]" />
      <ConsultantTraining />
      <CTABanner />
      <Testimonials />
      <WorkTogether />
    </main>
  );
}
