import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured"
import Image from "next/image";
import Featured2 from "@/components/Featured2";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Featured/>
      <Featured2/>
    </div>
  );
}
