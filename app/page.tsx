import Navbar from "@/components/navbar/Navbar";
import About from "./components/About";
import Pakej from "./components/Pakej";
import Servis from "./components/Servis";
import Steps from "./components/Steps";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Carousel />
        <About />
        <Servis />
        <Pakej />
        <Steps />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
