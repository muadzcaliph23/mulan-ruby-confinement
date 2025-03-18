import React from "react";
import Image from "next/image";

const Kenapa = () => {
  return (
    <div
      className="flex flex-col gap-10 items-center justify-center min-h-screen px-10 md:py-10 py-[20%] text-center"
      id="tentang-kami"
    >
      <h1 className="font-semibold text-3xl md:text-4xl">
        Kenapa pilih{" "}
        <span className="text-primary">Mulan Ruby Confinement?</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-5 text-secondary mt-8">
        <div className="bg-primary rounded-lg drop-shadow-md flex flex-col gap-4 items-center justify-between px-5 py-10">
          <h2 className="font-semibold text-lg text-white">
            Therapist Bertauliah
            <br />& Berpengalaman
          </h2>
          <Image src="/Kenapa/staff.png" alt="Staff" width={100} height={160} />
          <p>Usah risau, staf kami terlatih dan berlesen</p>
        </div>
        <div className="flex flex-col justify-between gap-5">
          <div className="bg-gradient-to-r from-primary to-black rounded-lg drop-shadow-md flex flex-col h-1/2 items-center justify-between px-5 py-10">
            <h2 className="font-semibold text-white text-lg">
              Rawatan terus ke rumah
            </h2>
            <p>Anda rehat, kami datang!</p>
          </div>
          <div className="bg-gradient-to-r from-primary to-black rounded-lg drop-shadow-md flex flex-col h-1/2 items-center justify-between px-5 py-10">
            <h2 className="font-semibold text-white text-lg">
              Pakej Fleksibel
            </h2>
            <p>Pakej boleh disunting Mengikut Keperluan Ibu</p>
          </div>
        </div>
        <div className="bg-black rounded-lg drop-shadow-md flex flex-col items-center justify-between px-5 py-10">
          <h2 className="font-semibold text-white text-lg">
            Produk & Herba Premium
          </h2>
          <Image src="/Kenapa/herbs.png" alt="Staff" width={100} height={160} />
          <p>Peralatan kami sedia untuk Pemulihan Terbaik</p>
        </div>
      </div>
    </div>
  );
};

export default Kenapa;
