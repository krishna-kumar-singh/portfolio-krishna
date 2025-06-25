import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { SkillsPreview } from '@/components/sections/skills-preview';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsPreview />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}