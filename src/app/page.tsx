import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <FeaturedCourses />
      <Instructors />
      <Footer />
    </>
  );
}
