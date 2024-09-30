import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
    </>
  );
}
