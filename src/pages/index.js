import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="kelly fesler's portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="$whois kelly" />
        <InterestsSection sectionId="features" heading="features" />
        <ProjectsSection sectionId="prior-work" heading="prior work" />
        <ContactSection sectionId="contact" heading="botherations?" />
      </Page>
    </>
  );
}
