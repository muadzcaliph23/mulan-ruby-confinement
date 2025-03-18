import Navbar from "@/components/navbar/Navbar";
import Pakej from "./components/Pakej";
import Steps from "./components/Steps";
import Carousel from "./components/Carousel";
import Kenapa from "./components/Kenapa";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Carousel />
        <Kenapa />
        <Pakej />
        <Steps />
      </main>
      <Footer />
    </div>
  );
}
