import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
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

      <FeatureSection
        title="Learning Management System"
        description="TG Academy is a hub of knowledge and skills-building resources designed to empower individuals and organisations alike. These technical courses powered by the latest programming languages and development frameworks fit to ensure world-class learning performance and employee management. TG Academy offers a wide range of courses to cater to diverse learning goals. With accessible, progressive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape."
        bullets={["Business Analysis", "Career Training", "Effective Communication", "Entrepreneurship", "Business Media"]}
        imageSrc="/images/lms.jpg"
        imageAlt="Professionals engaged in a Learning Management System training session"
        imageLeft={true}
        bgColor="bg-white"
      />

      <FeatureSection
        title="Corporate Trainings"
        description="Empower your employees with our Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert trainers have curated a selection of training courses from top-tier organisations that align with your company's goals and values."
        bullets={["Leadership Training", "Strategic Planning and Implementation", "Project Management", "Gamification Training", "Customised Training"]}
        imageSrc="/images/corporate.jpg"
        imageAlt="Corporate training session with employees in a professional environment"
        imageLeft={false}
        bgColor="bg-[#f9f5ff]"
      />

      <FeatureSection
        title="Personalised Individual Training"
        description="Begin a journey of lifelong learning and professional development with Tobams Group. Whether you're looking to advance in your current career or pivot to a new field, our expert team works with tailored resources to meet the learning needs of today's professionals."
        bullets={["Leadership Development", "Soft Skills Development", "Industry Specific Accelerators", "Business Skills Enhancement", "Time Management & Productivity", "Career Development"]}
        imageSrc="/images/individual.jpg"
        imageAlt="Individual professional participating in a personalised training session"
        imageLeft={true}
        bgColor="bg-white"
      />

      <FeatureSection
        title="Capacity Development"
        description="At Tobams Group, we empower individuals and organisations through tailored training programs and workshops. Our commitment to excellence has been unwavering in your success and growth. We are committed to providing a comprehensive approach designed to foster your development and potential."
        bullets={["Talent Pooling Programs", "Board-Level Workshops", "Personalised Mentorship", "Effective Skills Enhancement", "Collaborative Learning Environment", "Strategy Support and Penetration"]}
        imageSrc="/images/capacity.jpg"
        imageAlt="Group capacity development workshop with diverse professionals"
        imageLeft={false}
        bgColor="bg-[#f9f5ff]"
      />

      <ManagementDevelopment />
      <TransformationHub />
      <ConsultantTraining />
      <CTABanner />
      <Testimonials />
      <WorkTogether />
    </main>
  );
}
