import { pakej } from "../../../lib/pakej";
import Header from "./components/Header";
import Pilihan from "./components/Pilihan";
import Penerangan from "./components/Penerangan";
import Tempah from "./components/Tempah";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  console.log(params.slug);
  const pakejPilihan = pakej.find(
    (p) => p.link.replace("/", "") === params.slug
  );

  if (!pakejPilihan) {
    return <p>Pakej tidak dipilih dengan betul {pakejPilihan}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-[60px] bg-gray-100">
      <Header />
      <Pilihan pakejPilihan={pakejPilihan} />
      <Tempah pakejPilihan={pakejPilihan} />
      <Penerangan pakejPilihan={pakejPilihan} />
    </div>
  );
};

export default page;
