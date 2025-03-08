import React from "react";

const QuickBooking = () => {
  return (
    <div className="flex justify-center items-center px-10 py-3">
      <div className="flex gap-10">
        <h2 className="font-semibold text-xl text-gray-700">Tempahan Pantas</h2>
        <select className="rounded-lg px-2 cursor-pointer w-[220px]">
          <option value="">Sila pilih pakej</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
        </select>
        <input className="rounded-lg px-2" type="dropdown" />
        <button className="bg-primary text-black transition-all duration-300 px-4 py-1 rounded-lg hover:bg-gray-300 hover:text-black">
          Tempah Sekarang
        </button>
      </div>
    </div>
  );
};

export default QuickBooking;
