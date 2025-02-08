import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured"
import Image from "next/image";
import Featured2 from "@/components/Featured2";
import LatestNews from "@/components/LatestNews";
import TopRecipes from "@/components/TopRecipes";
import Testimonials from "@/components/Testimonals";
import HeroSection from "@/components/HeroSection";
import NavSecond from "@/components/NavBar1";
import Footer from "@/components/Footer";
import FooterSecond from "@/components/FooterSecond";
import FastFoodMenu from "@/components/Card";


export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
      <NavSecond/>
      {/* <HeroSection/> */}
      {/* <Featured/> */}
      {/* <Featured2/> */}
      <FastFoodMenu/>
      {/* <TopRecipes/> */}
      {/* <Testimonials/> */}
      {/* <LatestNews/> */}
      {/* <Footer/> */}
      {/* <FooterSecond/> */}
      
    </div>
  );
}
