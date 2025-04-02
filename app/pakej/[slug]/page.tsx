import { pakej } from "../../../lib/pakej";
import Header from "./components/Header";
import Pilihan from "./components/Pilihan";
import Penerangan from "./components/Penerangan";
import Tempah from "./components/Tempah";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pakejPilihan = pakej.find((p) => p.link.replace("/", "") === slug);

  return {
    title: `Mulan Ruby Spa | ${pakejPilihan?.nama}`,
    description: pakejPilihan?.pros[0],
    alternates: {
      canonical: `/pakej/${slug}`,
    },
    openGraph: {
      images: [
        {
          url: "/slider-1.jpg",
          width: 1000,
          height: 500,
          alt: `Mulan Ruby Spa | ${pakejPilihan?.nama}`,
        },
      ],
    },
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const pakejPilihan = pakej.find((p) => p.link.replace("/", "") === slug);

  if (!pakejPilihan) {
    return <p>Pakej tidak dipilih dengan betul</p>;
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
