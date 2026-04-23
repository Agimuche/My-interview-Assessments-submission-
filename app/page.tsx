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

      <LMSSection />

      <TrainingServices />

      <ManagementDevelopment />
      <TransformationHub />
      <ConsultantTraining />
      <CTABanner />
      <Testimonials />
      <WorkTogether />
    </main>
  );
}
