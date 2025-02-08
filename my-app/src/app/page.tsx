import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured"
import Featured2 from "@/components/Featured2";
import HeroSection from "@/components/HeroSection";
import Populardishes from "@/components/Populardishes";
import HotMeal from "@/components/Hotmeal";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
    <HotMeal/>
    </div>
  );
}
