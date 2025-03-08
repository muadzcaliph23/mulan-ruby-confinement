import React from "react";

const Servis = () => {
  const services = [{}];

  return (
    <div>
      <div
        className="min-h-[80vh] flex flex-col items-center text-center bg-cover bg-center px-10 py-[8%]"
        style={{
          backgroundImage: "url(slider(1).jpg)",
        }}
      >
        <h1 className="text-4xl font-bold drop-shadow-lg mb-10">
          SERVIS YANG DITAWARKAN
        </h1>
        <div className="grid grid-cols-3">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center space-y-5 p-5"
            >
              <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center drop-shadow-lg">
                Test
              </div>
              <div className="">
                <h2 className="font-bold text-lg">URUT</h2>
                <p>
                  Membuang angin, melancarkan perjalanan darah sekaligus
                  menyegarkan badan yang lesu.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servis;
